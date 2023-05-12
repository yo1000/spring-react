import React from 'react'

export default function Input({type, id, name, label, description, placeholder, onChange}) {
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type ?? "text"}
          name={name}
          id={id}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          aria-describedby={`${label}-description`}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
      <p className="mt-2 text-sm text-gray-500" id="email-description">
        {description}
      </p>
    </div>
  )
}
