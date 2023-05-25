import React from 'react'

/**
 * @typedef {Object} FormatType
 * @property {string} name
 */

export class FormatTypes {
  /** @type {FormatType} */
  static digitGrouping = { name: "digitgrouping" }
  /** @type {FormatType} */
  static dateGrouping = { name: "dategrouping" }
}

/**
 * @param {?string} type
 * @param {?string} label
 * @param {?boolean} readOnly
 * @param {?number} maxLength
 * @param {?string} placeholder
 * @param {?(string|number)} defaultValue
 * @param {?FormatType} format
 * @param {?boolean} formatOnBlur
 * @param {?boolean} unformatOnFocus
 * @param {?Function} onChange
 * @returns {JSX.Element}
 * @constructor
 */
export default function Input({
  type, label, readOnly, maxLength, placeholder, value,
  format = null, formatOnBlur = true, unformatOnFocus = true, onChange,
  description = null
}) {
  const plainDigitRegex = /^\d+$/
  const plainDateRegex = /^(?:000[1-9]|00[1-9][0-9]|0[1-9][0-9]{2}|[1-9][0-9]{3})(?:0[1-9]|1[0-2])(?:0[1-9]|[12][0-9]|3[01])$/
  const formattedDigitRegex = /^[0-9]{1,3}(?:,[0-9]{3})*$/
  const formattedDateRegex = /^(?:000[1-9]|00[1-9][0-9]|0[1-9][0-9]{2}|[1-9][0-9]{3})-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/
  const formatType = format ? `${format.name}`.toLowerCase() : ""

  return (
    <div className="relative">
      {label
        ? <label
          className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">
          {label}
        </label>
        : <></>
      }
      <input
        type={type ?? "text"}
        className={`inline-block ${description === null ? "w-full" : "w-1/2"} rounded-md border-0 py-1.5 text-gray-900 ${readOnly ? "bg-gray-50" : ""} shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
        readOnly={readOnly ?? false}
        maxLength={maxLength}
        placeholder={placeholder}
        defaultValue={!readOnly ? (
          formatType === FormatTypes.digitGrouping.name && plainDigitRegex.test(value)
            ? (value * 1).toLocaleString()
            : formatType === FormatTypes.dateGrouping.name && plainDateRegex.test(value)
              ? `${`${value}`.substring(0, 4)}-${`${value}`.substring(4, 6)}-${`${value}`.substring(6, 8)}`
              : value
        ) : null}
        value={readOnly ? (
          formatType === FormatTypes.digitGrouping.name && plainDigitRegex.test(value)
            ? (value * 1).toLocaleString()
            : formatType === FormatTypes.dateGrouping.name && plainDateRegex.test(value)
              ? `${`${value}`.substring(0, 4)}-${`${value}`.substring(4, 6)}-${`${value}`.substring(6, 8)}`
              : value
        ) : null}
        onChange={(event) => onChange && onChange(event)}
        onFocus={async (event) => {
          if (!unformatOnFocus) return
          const {value} = event.target
          if (!readOnly && formatType === FormatTypes.digitGrouping.name && formattedDigitRegex.test(value)) {
            event.target.value = value.replaceAll(/[^0-9]+/ig, "")
          }
          if (!readOnly && formatType === FormatTypes.dateGrouping.name && formattedDateRegex.test(value)) {
            event.target.value = value.replaceAll(/[^0-9]+/ig, "")
          }
        }}
        onBlur={async (event) => {
          if (!formatOnBlur) return
          const {value} = event.target
          if (!readOnly && formatType === FormatTypes.digitGrouping.name && plainDigitRegex.test(value)) {
            event.target.value = (value * 1).toLocaleString()
          }
          if (!readOnly && formatType === FormatTypes.dateGrouping.name && plainDateRegex.test(value)) {
            event.target.value = `${`${value}`.substring(0, 4)}-${`${value}`.substring(4, 6)}-${`${value}`.substring(6, 8)}`
          }
        }}
      />
      {description !== null
        ? <p className="inline-block w-2/5 mt-2 ml-2 text-sm text-gray-500" id="email-description">{description}</p>
        : <></>
      }
    </div>
  )
}
