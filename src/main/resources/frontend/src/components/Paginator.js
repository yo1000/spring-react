import React from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid";

/**
 * @typedef {Object} PaginatorClickParams
 * @property {number} number
 * @property {number} totalPages
 * @property {number} size
 * @property {number} totalElements
 */

/**
 * @callback PaginatorClick
 * @param {PaginatorClickParams} pageable
 */

/**
 *
 * @param {number} number
 * @param {number} totalPages
 * @param {number} size
 * @param {number} totalElements
 * @param {PaginatorClick} onClick
 * @return {JSX.Element}
 * @constructor
 */
export default function Paginator({
  number, totalPages, size, totalElements,
  onClick
}) {
  const indexes = [...Array(totalPages).keys()]
  const first = 0
  const last = totalPages - 1
  const rangeSize = 5
  const rangeHalfSize = Math.floor(rangeSize / 2)
  const rangedFirst = number <= rangeHalfSize
    ? first + 1
    : number + rangeHalfSize >= last
      ? last - rangeSize + 1
      : number - rangeHalfSize
  const rangedLast = number >= last - rangeHalfSize
    ? last - 1
    : number + rangeHalfSize < rangeSize
      ? rangeSize - 1
      : number + rangeHalfSize
  const rangedIndexes = indexes.filter(i => i >= rangedFirst && i <= rangedLast)
  const firstElement = number * size + 1
  const lastElement = (number + 1) * size < totalElements
    ? (number + 1) * size
    : totalElements

  return (
    <>
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={async () => onClick({
            number: number > first ? number - 1 : first,
            totalPages: totalPages,
            size: size,
            totalElements: totalElements,
          })}
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={async () => onClick({
            number: number < last ? number + 1 : last,
            totalPages: totalPages,
            size: size,
            totalElements: totalElements,
          })}
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{firstElement}</span> to <span className="font-medium">{lastElement}</span> of{' '}
            <span className="font-medium">{totalElements}</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={async () => onClick({
                number: number > first ? number - 1 : first,
                totalPages: totalPages,
                size: size,
                totalElements: totalElements,
              })}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-current="page"
              className={`relative z-10 inline-flex items-center text-gray-900
                px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 
                hover:bg-gray-50 focus:z-20 focus:outline-offset-0
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                ${number === first ? "text-white bg-indigo-600 ring-indigo-500 hover:bg-indigo-500 hover:ring-indigo-600" : ""}`}
              onClick={async () => onClick({
                number: first,
                totalPages: totalPages,
                size: size,
                totalElements: totalElements,
              })}
            >
              {first + 1}
            </a>
            {rangedIndexes[0] - 1 > first
              ? (
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-400 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  ...
                </span>
              )
              : <></>
            }
            {rangedIndexes.map(i =>
              <a
                href="#"
                className={`relative inline-flex items-center text-gray-900 
                  px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 
                  hover:bg-gray-50 focus:z-20 focus:outline-offset-0 
                  ${number === i ? "text-white bg-indigo-600 ring-indigo-500 hover:bg-indigo-500 hover:ring-indigo-600" : ""}`}
                onClick={async () => onClick({
                  number: i,
                  totalPages: totalPages,
                  size: size,
                  totalElements: totalElements,
                })}
              >
                {i + 1}
              </a>
            )}
            {rangedIndexes[rangedIndexes.length - 1] + 1 < last
              ? (
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-400 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  ...
                </span>
              )
              : <></>
            }
            <a
              href="#"
              aria-current="page"
              className={`relative z-10 inline-flex items-center text-gray-900 
                px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 
                hover:bg-gray-50 focus:z-20 focus:outline-offset-0
                focus-visible:outline focus-visible:outline-2 
                focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                ${number === last ? "text-white bg-indigo-600 ring-indigo-500 hover:bg-indigo-500 hover:ring-indigo-600" : ""}`}
              onClick={async () => onClick({
                number: last,
                totalPages: totalPages,
                size: size,
                totalElements: totalElements,
              })}
            >
              {last + 1}
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={async () => onClick({
                number: number < last ? number + 1 : last,
                totalPages: totalPages,
                size: size,
                totalElements: totalElements,
              })}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </>
  )
}
