import React, {Fragment, useEffect, useState} from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * @typedef {object} ListItem
 * @property {string} value
 * @property {string} label
 */

/**
 *
 * @param {ListItem[]} items
 * @param {?Function} onChange
 * @param {?Function} onChangeItem
 * @param {?string} label
 * @param {?string} value
 * @return {JSX.Element}
 * @constructor
 */
export default function ComboBox({items, onChange, onChangeItem, label, value}) {
  const [query, setQuery] = useState(value ?? "")
  const [selectedItem, setSelectedItem] = useState(items.find(item => (item.value === value)) ?? null)

  const filteredItems =
    query === ''
      ? items
      : items.filter((item) => {
        return item.value.toLowerCase().includes(query.trim().toLowerCase()) || item.label.toLowerCase().includes(query.trim().toLowerCase())
      })

  useEffect(() => {
    document.querySelectorAll(`[role="combobox"]`).forEach(element => {
      element.setAttribute("autocomplete", "off")
    })
  }, [])

  return (
    <div className="relative">
      <Combobox as={Fragment} value={selectedItem ?? {value: '', label: ''}} onChange={(item) => {setSelectedItem(item); onChangeItem && onChangeItem(item)}}>
        {label
          ? <Combobox.Label className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">{label}</Combobox.Label>
          : <></>
        }
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(event) => {setQuery(event.target.value); onChange(event)}}
          displayValue={(item) => items.some(i => i.value === item.value && i.label === item.label) ? `${item?.value} ${item?.label}`.trim() : ""}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredItems.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredItems.map((item) => (
              <Combobox.Option
                key={item.value}
                value={item}
                className={({active}) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({active, selected}) => (
                  <>
                    <div className="flex">
                      <span className={classNames('truncate', selected && 'font-semibold')}>{item.value}</span>
                      <span
                        className={classNames(
                          'ml-2 truncate text-gray-500',
                          active ? 'text-indigo-200' : 'text-gray-500'
                        )}
                      >
                        {item.label}
                      </span>
                    </div>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </Combobox>
    </div>
  )
}
