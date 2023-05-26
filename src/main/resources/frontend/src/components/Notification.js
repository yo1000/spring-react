import React, {Fragment, useEffect, useState} from 'react'
import {Transition} from '@headlessui/react'
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline'
import {XMarkIcon} from '@heroicons/react/20/solid'

export default function Notification({...props}) {
  return (
    <div className="pointer-events-none flow-root fixed z-10 mt-16 inset-0 flex items-end p-6 gap-y-4 sm:items-start sm:p-6">
      <div className="relative h-full">
        <div className="w-full absolute bottom-0">
          {props.children}
        </div>
      </div>
    </div>
  )
}
export function Message({type = "info", header, body, onClose}) {
  const [show, setShow] = useState(false)
  const types = {
    info: {
      icon: <InformationCircleIcon className="h-6 w-6 text-blue-400" aria-hidden="true" />,
    },
    success: {
      icon: <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />,
    },
    warn: {
      icon: <ExclamationCircleIcon className="h-6 w-6 text-yellow-400" aria-hidden="true" />,
    },
    error: {
      icon: <XCircleIcon className="h-6 w-6 text-red-400" aria-hidden="true" />,
    },
  }

  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div aria-live="assertive" className="pointer-events-none">
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm mb-4 overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {((type && types[type.toLowerCase()]) ?? types.info).icon}
                    {/*<CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />*/}
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">{header}</p>
                    <p className="mt-1 text-sm text-gray-500">{body}</p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        setShow(false)
                        onClose()
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}
