import React from "react"
import { XCircleIcon } from '@heroicons/react/20/solid'

/**
 *
 * @param {string} heading
 * @param {string[]} messages
 * @returns {JSX.Element}
 * @constructor
 */
export default function Alert({heading, messages}) {
  return (
    <div className={`rounded-md bg-red-50 p-4 mt-8 ${!heading && (!messages || !messages.length) ? "hidden" : ""}`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          {heading ? <h3 className="text-sm font-medium text-red-800">{heading}</h3> : <></>}
          {messages && messages.length ? (
            <div className="mt-2 text-sm text-red-700">
              <ul role="list" className="list-disc space-y-1 pl-5">
                {messages.map(m => (
                  <li>{m}</li>
                ))}
              </ul>
            </div>
          ) : <></>}
        </div>
      </div>
    </div>
  )
}
