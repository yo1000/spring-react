import React, {Fragment, useEffect, useState} from 'react'
import {Dialog, Popover, Transition} from '@headlessui/react'
import {useAuth} from "react-oidc-context";
import {minimatch} from "minimatch";
import {site} from "../site"
import AuthoritiesClient from "../clients/AuthoritiesClient";
import {useLocation} from "react-router-dom";
import {ChevronDownIcon, UserCircleIcon, XMarkIcon} from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * @typedef {object} MenuItem
 * @property {string} name
 * @property {string} href
 * @property {?string} authority
 */

/**
 * @typedef {object} SecondaryCategory
 * @property {string} name
 * @property {?JSX.Element} icon
 * @property {MenuItem[]} items
 */

/**
 * @typedef {object} PrimaryCategory
 * @property {string} name
 * @property {?JSX.Element} icon
 * @property {SecondaryCategory[]} secondaryCategories
 */

/**
 *
 * @param {PrimaryCategory[]} primaryCategories
 * @returns {JSX.Element}
 * @constructor
 */
export default function Header({primaryCategories}) {
  const location = useLocation()

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

  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-full sm:px-6 lg:px-8">
          <div className="px-4 pb-14 sm:px-0 sm:pb-0">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex flex-1">
                <a href="/" className="-m-1.5 p-1.5">
                  <h1 className="font-extrabold">{site.title}</h1>
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch">
                <div className="flex h-14 space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0">
                  {primaryCategories
                    .filter(primaryCategory => (
                      primaryCategory.secondaryCategories.some(secondaryCategory => (
                        secondaryCategory.items.some(item => item.authority == null || authorities.filter(a => a.authorized).some(a => matchPath(a.uri, item.authority)))
                      ))
                    ))
                    .map((primaryCategory, primaryCategoryIndex) => (
                    <Popover key={`primary-${primaryCategoryIndex}`} className="flex z-10">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                !open && primaryCategory.secondaryCategories.some(s => s.items.some(i => location.pathname === i.href))
                                  ? "border-transparent text-indigo-600 hover:text-indigo-700"
                                  : "",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {primaryCategory.icon ? <primaryCategory.icon className="h-5 mr-1.5"/> : <></>}
                              {primaryCategory.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-gray-500 sm:text-sm">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow-md" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                  <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 pb-12 pt-10 md:grid-cols-2 lg:gap-x-8">
                                    {primaryCategory.secondaryCategories
                                      .filter(secondaryCategory => (
                                        secondaryCategory.items.some(item => item.authority == null || authorities.filter(a => a.authorized).some(a => matchPath(a.uri, item.authority)))
                                      ))
                                      .map((secondaryCategory, secondaryCategoryIndex) => (
                                      <div key={`secondary-${secondaryCategoryIndex}`} className="grid grid-cols-1 gap-x-6 gap-y-10 lg:gap-x-8">
                                        <div>
                                          <p className="relative h-5 font-medium text-gray-900">
                                            {secondaryCategory.icon ? <secondaryCategory.icon className="inline-block h-5 mr-1.5"/> : <></>}
                                            <span className="inline-block absolute inset-y-0">
                                            {secondaryCategory.name}
                                            </span>
                                          </p>
                                          <div className="mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6">
                                            {secondaryCategory.items
                                              .filter(item => item.authority == null || authorities.filter(a => a.authorized).some(a => matchPath(a.uri, item.authority)))
                                              .reduce((acc, v, i) => {
                                                if (i % 4 === 0) {
                                                  acc.push([])
                                                }
                                                acc[acc.length - 1].push(v)
                                                return acc
                                              }, [])
                                              .map((itemGroup, itemGroupIndex) => (
                                                <ul
                                                  role="list"
                                                  key={`item-${itemGroupIndex}`}
                                                  aria-label={`item-${itemGroupIndex}`}
                                                  className="space-y-6 sm:space-y-4"
                                                >
                                                  {itemGroup.map((item, itemIndex) => (
                                                    <li key={item.name} className="flex">
                                                      <a href={item.href} className="hover:text-gray-800">
                                                        {item.name}
                                                      </a>
                                                    </li>
                                                  ))}
                                                </ul>
                                              ))}
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}
                </div>
              </Popover.Group>

              <div className="flex flex-1 items-center justify-end">
                <div className="ml-4 flow-root lg:ml-8">
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
                      ? (
                        <Popover className="relative">
                          <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            <UserCircleIcon className="inline-block h-7 mr-1.5"/>
                            <span>{auth.user?.profile?.name}</span>
                            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute left-1/2 z-10 mt-2 flex w-screen max-w-min -translate-x-1/2 px-4">
                              <div className="w-44 shrink rounded-lg bg-white p-2 text-sm font-semibold leading-6 text-gray-900 shadow-md ring-1 ring-gray-900/5">
                                <a className="block p-2 hover:text-indigo-600" onClick={() => {
                                  localStorage.setItem("idtoken", auth.user?.id_token)
                                  void auth.removeUser()
                                }}>
                                  Sign out
                                </a>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </Popover>
                      ) : (
                        <button className="text-base font-semibold leading-6 text-gray-900"
                                onClick={() => void auth.signinRedirect()}>
                          Sign in <span aria-hidden="true">&rarr;</span>
                        </button>
                      )
                  }
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
