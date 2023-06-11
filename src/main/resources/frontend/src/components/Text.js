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
export default function Text({
  format = null,
  ...props
}) {
  const plainDigitRegex = /^\d+$/
  const plainDateRegex = /^(?:000[1-9]|00[1-9][0-9]|0[1-9][0-9]{2}|[1-9][0-9]{3})(?:0[1-9]|1[0-2])(?:0[1-9]|[12][0-9]|3[01])$/
  const formatType = format ? `${format.name}`.toLowerCase() : ""

  const value = props.children

  return (
    <div className="relative">
      <p className="inline-block w-full py-1.5 px-3 text-gray-900 sm:text-sm ">
        {
          (typeof value) !== "string" ? value
            : formatType === FormatTypes.digitGrouping.name && plainDigitRegex.test(value)
            ? (value * 1).toLocaleString()
            : formatType === FormatTypes.dateGrouping.name && plainDateRegex.test(value)
            ? `${`${value}`.substring(0, 4)}-${`${value}`.substring(4, 6)}-${`${value}`.substring(6, 8)}`
            : value
        }
      </p>
    </div>
  )
}
