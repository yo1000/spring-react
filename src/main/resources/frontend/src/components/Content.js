import React from 'react'

export default function Content({heading, ...props}) {
  return (
    <>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">{heading}</h1>
        </div>
      </div>
      {props.children}
    </>
  )
}
