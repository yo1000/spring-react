import React, {useEffect, useState} from 'react'
import {Dialog, Disclosure, Popover, Transition} from '@headlessui/react'
import {Bars3Icon, XMarkIcon,} from '@heroicons/react/24/outline'
import {
  BeakerIcon,
  ChevronDownIcon,
  FireIcon,
  SparklesIcon,
  SwatchIcon,
  UserCircleIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/20/solid'
import {useAuth} from "react-oidc-context";
import {minimatch} from "minimatch";
import {site} from "../site"
import AuthoritiesClient from "../clients/AuthoritiesClient";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const menuItems = [{
    name: "Items", href: "/items", authority: "/api/items", icon: BeakerIcon, subItems: null,
  }, {
    name: "Spells", href: null, authority: null, icon: FireIcon, subItems: null,
  }, {
    name: "Weapons", href: "/weapons", authority: "/api/weapons", icon: WrenchScrewdriverIcon, subItems: null,
  }, {
    name: "Refine", href: null, icon: SparklesIcon, subItems: [{
      name: "Cards", href: "/cards", authority: "/api/cards", icon: SwatchIcon, description: null,
    }]
  }, {
    name: "Others", href: null, icon: null, subItems: [{
      name: "Empty", href: "/empty", authority: null, icon: null, description: null,
    }, {
      name: "Empty12345678901234567890", href: "/empty", authority: null, icon: null, description: null,
    }]
  }]

  const auth = useAuth()
  const [authorities, setAuthorities] = useState([])

  const authoritiesClient = new AuthoritiesClient(auth)

  useEffect(() => {
    authoritiesClient
      .get()
      .then(data => setAuthorities(data))
  }, [auth])

  const matchPath = (pattern, path) => {
    const normalized = pattern.match(/\/[*]+$/) ? `${path}/` : path
    return minimatch(normalized, pattern)
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <h1>{site.title}</h1>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {menuItems
            .filter(menuItem => menuItem.authority == null || authorities.filter(a => a.authorized).some(a => matchPath(a.uri, menuItem.authority)))
            .map(menuItem => (menuItem.subItems
                ? <Popover className="group/menu relative">
                  <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 group-hover/menu:text-indigo-600">
                    {menuItem.icon
                      ? <menuItem.icon className="inline-block h-6 w-6 me-1 text-gray-600 group-hover/menu:text-indigo-600" aria-hidden="true" />
                      : <></>
                    }
                    {menuItem.name}
                    <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  </Popover.Button>
                  <Popover.Panel className="absolute top-full z-10 mt-3 w-fit max-w-fit overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {menuItem.subItems
                        .filter(subItem => subItem.authority == null || authorities.filter(a => a.authorized).some(a => matchPath(a.uri, subItem.authority)))
                        .map((subItem) => (
                          <div
                            key={subItem.name}
                            className="group/sub relative flex items-center gap-x-6 w-fit rounded-lg p-4 text-sm leading-6"
                          >
                            <div className="flex-auto w-max">
                              <a href={subItem.href} className="block font-semibold text-gray-900 group-hover/sub:text-indigo-400">
                                {subItem.icon
                                  ? <subItem.icon className="inline-block h-6 w-6 me-1 text-gray-600 group-hover/sub:text-indigo-400" aria-hidden="true" />
                                  : <></>
                                }
                                {subItem.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-gray-600">{subItem.description}</p>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </Popover.Panel>
                </Popover>
                : menuItem.href
                ? <a href={menuItem.href} className="group text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600">
                  {menuItem.icon
                    ? <menuItem.icon className="inline-block h-6 w-6 me-1 text-gray-600 group-hover:text-indigo-600 group-hover:text-indigo-600" aria-hidden="true" />
                    : <></>
                  }
                  {menuItem.name}
                </a>
                : <span className="text-sm font-semibold leading-6 text-gray-900">
                  {menuItem.icon
                    ? <menuItem.icon className="inline-block h-6 w-6 me-1 text-gray-600" aria-hidden="true" />
                    : <></>
                  }
                  {menuItem.name}
                </span>
            ))}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {
            auth.activeNavigator === 'signinSilent'
              ? <div>Signing you in...</div>
              : auth.activeNavigator === 'signoutRedirect'
              ? <div>Signing you out...</div>
              : auth.isLoading
              ? <div>Loading...</div>
              : auth.error
              ? <div>{`Oops... ${auth.error.message}`}</div>
              : auth.isAuthenticated
              ? <>
                <Popover className="group/menu relative">
                  <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 group-hover/menu:text-indigo-600">
                    <UserCircleIcon className="inline-block h-6 w-6 me-1 text-gray-600 group-hover/menu:text-indigo-600" aria-hidden="true" />
                    {auth.user?.profile.name}
                    <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  </Popover.Button>
                  <Popover.Panel className="absolute right-0 top-full z-10 mt-3 max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      <div className="group/sub relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6">
                        <div className="flex-auto">
                          <button className="text-sm font-semibold leading-6 text-gray-900 group-hover/sub:text-indigo-400"
                            onClick={() => {
                              localStorage.setItem("idtoken", auth.user?.id_token)
                              void auth.removeUser();
                            }}>Sign out
                          </button>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Popover>
              </>
              : <button className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600" onClick={() => void auth.signinRedirect()}>
                Sign in <span aria-hidden="true">&rarr;</span>
              </button>
          }
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <h1>{site.title}</h1>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {menuItems
                  .filter(menuItem => menuItem.authority == null || authorities.filter(a => a.authorized).some(a => matchPath(a.uri, menuItem.authority)))
                  .map(menuItem => (menuItem.subItems
                    ? <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                            {menuItem.name}
                            <ChevronDownIcon
                              className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {menuItem.subItems
                              .filter(subItem => subItem.authority == null || authorities.filter(a => a.authorized).some(a => matchPath(a.uri, subItem.authority)))
                              .map((subItem) => (
                                <Disclosure.Button
                                  key={subItem.name}
                                  as="a"
                                  href={subItem.href}
                                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                  {subItem.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    : <a
                      href={menuItem.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {menuItem.name}
                    </a>
                    ))
                }
              </div>
              <div className="py-6">
                {
                  auth.activeNavigator === 'signinSilent'
                    ? <div>Signing you in...</div>
                    : auth.activeNavigator === 'signoutRedirect'
                    ? <div>Signing you out...</div>
                    : auth.isLoading
                    ? <div>Loading...</div>
                    : auth.error
                    ? <div>{`Oops... ${auth.error.message}`}</div>
                    : auth.isAuthenticated
                    ? <button className="text-base font-semibold leading-6 text-gray-900"
                      onClick={() => {
                        localStorage.setItem("idtoken", auth.user?.id_token)
                        void auth.removeUser();
                      }}>Sign out
                    </button>
                    : <button className="text-base font-semibold leading-6 text-gray-900" onClick={() => void auth.signinRedirect()}>
                      Sign in <span aria-hidden="true">&rarr;</span>
                    </button>
                }
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
