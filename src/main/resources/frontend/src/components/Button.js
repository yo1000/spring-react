import React from "react";

export default function Button({type, onClick, ...props}) {
  const types = {
    primary: (
      <button
        type="button"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={onClick}>
        {props.children}
      </button>
    ),
    secondary: (
      <button
        type="button"
        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={onClick}>
        {props.children}
      </button>
    ),
    info: (
      <button
        type="button"
        className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        onClick={onClick}>
        {props.children}
      </button>
    ),
    success: (
      <button
        type="button"
        className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        onClick={onClick}>
        {props.children}
      </button>
    ),
    warn: (
      <button
        type="button"
        className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
        onClick={onClick}>
        {props.children}
      </button>
    ),
    error: (
      <button
        type="button"
        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        onClick={onClick}>
        {props.children}
      </button>
    ),
  }

  types["help"] = types.info
  types["ok"] = types.success
  types["attention"] = types.warn
  types["danger"] = types.error
  types["ng"] = types.error

  return (
    <>
      {(type && types[type.toLowerCase()]) ?? types.primary}
    </>
  )
}
