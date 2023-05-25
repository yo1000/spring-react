import React from "react"
import {css} from "@emotion/react";

/**
 * @typedef {object} Props
 * @property {string} name
 * @property {?string} head
 * @property {?boolean} editable
 * @property {?number} maxLength
 * @property {?string} columnWidth
 * @property {?boolean} digitGrouping
 * @property {?Function} onChange
 */

/**
 *
 * @param {?string} id
 * @param {any[]} data  Supported data formats are limited.
 *
 * Should match one of following formats.
 *
 *   Supported
 *   ```json
 *   [{
 *     field1: value1,
 *     field2: value2,
 *     ... ,
 *   }]
 *   ```
 *
 *   Supported
 *   ```json
 *   [{
 *     field1: value1,
 *     field2: value2,
 *     list1: [{...}, {...}],
 *     ... ,
 *   }]
 *   ```
 *
 *   Unsupported
 *   ```json
 *   [{
 *     field1: value1,
 *     field2: value2,
 *     list1: [{...}, {...}],
 *     list2: [{...}, {...}],
 *     ... ,
 *   }]
 *   ```
 *
 *   Unsupported
 *   ```json
 *   [{
 *     field1: value1,
 *     field2: value2,
 *     object1: {...},
 *     ... ,
 *   }]
 *   ```
 *
 * @param {Props[]} props
 * @param {?string} combinationKey
 * @param {?boolean} autoSelect
 * @returns {JSX.Element}
 * @constructor
 */
export default function DataTable({
  id,
  data,
  props,
  combinationKey = "",
  autoSelect = false,
}) {
  const style = css`
    &.dataTable {
      overflow-x: scroll;
      overflow-y: hidden;

      .digitGrouping,
      .digitGrouping input {
        text-align: right;
      }

      .dataTableHead,
      .dataTableBody {
        width: fit-content;
        min-width: 100%;

        overflow-x: hidden;
        overflow-y: scroll;

        table {
          min-width: inherit;
        }

        &.dataEmpty {
          overflow-y: auto;
        }
      }

      .dataTableHead {
        th {
          border-bottom-width: 1px;
        }
      }

      .dataTableBody {
        td {
          vertical-align: top;
        }

        .editable td {}
        
        .evenRow td {
          --tw-bg-opacity: 1;
          background-color: rgb(249 250 251 / var(--tw-bg-opacity));
        }
        
        .oddRow td {}

        .subRow {
          border-top-style: none;
          
          &:last-of-type {}
        }

        input {
          border: 1px solid var(--spectrum-table-border-color, var(--spectrum-alias-border-color-mid));
          font-family: monospace;

          padding-left: 4px;
          padding-right: 4px;

          &[readonly] {
            color: var(--spectrum-table-cell-text-color-disabled,var(--spectrum-alias-text-color-disabled));
          }
        }
      }
    }
  `

  const autoWidth = props.some(p => !p.columnWidth) && `${100 / props.length}%`

  return (
    <div id={id} className="dataTable" css={style}>
      <div className={`dataTableHead ${!data || !data.length ? "dataEmpty" : ""}`}>
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
          <tr>
            {props.map((prop, index) => (
              <th style={autoWidth ? {
                width: autoWidth,
                minWidth: autoWidth,
                maxWidth: autoWidth,
              } : {
                width: prop.columnWidth,
                minWidth: prop.columnWidth,
                maxWidth: prop.columnWidth,
              }} scope="col" className={
                `${prop.digitGrouping ? "digitGrouping" : ""} py-3.5 ${index === 0 ? "pl-2" : ""} pr-2 text-left text-sm font-semibold text-gray-900`
              }>
                {prop.head}
              </th>
            ))}
          </tr>
          </thead>
        </table>
      </div>
      <div className={`dataTableBody ${!data || !data.length ? "dataEmpty" : ""}`}>
        <table className={`min-w-full divide-y divide-gray-300 ${props.some(p => p.editable) ? "editable" : ""}`}>
          <tbody className="divide-y divide-gray-200">
          <DataRows
            data={data}
            props={props}
            combinationKey={combinationKey}
            autoSelect={autoSelect}
            autoWidth={autoWidth}
          />
          </tbody>
        </table>
      </div>
    </div>
  )
}

function DataRows({
  data,
  props,
  combinationKey = "",
  autoSelect = false,
  autoWidth,
}) {
  const propNames = props && props.length ? props.map(p => p.name) : []
  const listName = propNames
    .filter(name => !name.startsWith(".") && !name.endsWith("."))
    .map(name => name.split("."))
    .filter(nameParts => nameParts.length === 2)
    .map(nameParts => nameParts[0])[0]

  if (!data || !data.length) return <></>

  return data.map((d, rowIndex) => (
    d[listName] && d[listName].length
      ? [...Array(d[listName].length).keys()].map(rowSubIndex => {
        const datum = {}
        for (const propName of propNames) {
          if (propName.startsWith(`${listName}.`)) {
            const elmName = propName.substring(`${listName}.`.length)
            datum[propName] = d[listName][rowSubIndex][elmName]
          } else {
            datum[propName] = d[propName]
          }
        }
        return <DataRow
          datum={datum}
          props={props}
          listName={listName}
          rowMax={data.length}
          rowIndex={rowIndex}
          rowSubIndex={rowSubIndex}
          rowSpan={rowSubIndex === 0 ? d[listName].length : 0}
          combinationKey={combinationKey}
          autoSelect={autoSelect}
          autoWidth={autoWidth}
        />
      })
      : <DataRow
        datum={d}
        props={props}
        rowMax={data.length}
        rowIndex={rowIndex}
        rowSubIndex={0}
        combinationKey={combinationKey}
        autoSelect={autoSelect}
        autoWidth={autoWidth}
      />
  ))
}

function DataRow({
  datum,
  props,
  rowMax,
  rowIndex,
  rowSubIndex,
  rowSpan,
  listName,
  combinationKey = "",
  autoSelect = false,
  autoWidth,
}) {
  const editable = props.some(p => p.editable)

  const nameIndexes = {}
  const shownPropNames = props.map(p => p.name)
  for (let i = 0; i < shownPropNames.length; i++) {
    nameIndexes[shownPropNames[i]] = i
  }

  return (
    <tr data-modified={false} className={`${rowIndex % 2 === 0 ? "evenRow" : "oddRow"} ${rowSubIndex > 0 ? "subRow" : ""}`}>
      {
        props.map((prop, index) => {
          if (rowSubIndex > 0 && (!prop.name.startsWith(`${listName}.`))) return

          return <td
            className={editable
              ? `${prop.digitGrouping ? "digitGrouping" : ""} ${rowSubIndex === 0 ? "pt-2" : ""} pb-2 ${index === 0 ? "pl-2" : ""} pr-2 text-sm font-medium text-gray-900`
              : `${prop.digitGrouping ? "digitGrouping" : ""} py-4 ${index === 0 ? "pl-2" : ""} pr-2 text-sm font-medium text-gray-900`
            }
            rowSpan={(!prop.name.startsWith(`${listName}.`)) ? rowSpan : null}
            data-row={rowIndex}
            data-row-sub={rowSubIndex}
            data-col={nameIndexes[prop.name]}
            style={autoWidth ? {
              width: autoWidth,
              minWidth: autoWidth,
              maxWidth: autoWidth,
            } : {
              width: prop.columnWidth,
              minWidth: prop.columnWidth,
              maxWidth: prop.columnWidth,
            }}
          >{
            (index === 0) ? Object.keys(datum)
              .filter(datumKey => props.every(p => datumKey !== p.name))
              .map(datumKey =>
                <input type="hidden" name={datumKey} value={datum[datumKey]}/>
              ) : <></>
          }{
            editable ? (
              <input
                className={prop.editable
                  ? "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  : "block w-full rounded-md border-0 bg-gray-50 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                }
                data-focusable={true}
                name={prop.name}
                defaultValue={prop.editable ? (
                  prop.digitGrouping && typeof datum[prop.name] === "number"
                    ? datum[prop.name].toLocaleString()
                    : datum[prop.name]
                ) : null}
                value={!prop.editable ? (
                  prop.digitGrouping && typeof datum[prop.name] === "number"
                    ? datum[prop.name].toLocaleString()
                    : datum[prop.name]
                ) : null}
                readOnly={!prop.editable}
                maxLength={prop.maxLength ? prop.maxLength : null}
                onKeyDown={(event) => {
                  const pos = event.target.closest("td").dataset
                  const r = pos.row * 1 || 0
                  const rs = pos.rowSub * 1 || 0
                  const c = pos.col * 1 || 0

                  const firstRowSpan = document
                    .querySelector(`[data-row="${r}"][data-row-sub="0"][rowspan]`)
                    ?.getAttribute("rowspan") ?? 0

                  switch (combinationKey.toLowerCase()) {
                    case 'alt':
                      if (!event.altKey) return
                      break
                    case 'ctrl':
                    case 'control':
                      if (!event.ctrlKey) return
                      break
                    case 'shift':
                      if (!event.shiftKey) return
                      break
                    default:
                      break
                  }

                  switch (event.key) {
                    case 'ArrowUp':
                      if (r > 0 || rs > 0) {
                        let input = document.querySelector(`[data-row="${r}"][data-row-sub="${rs - 1}"][data-col="${c}"] input[data-focusable]`)
                        if (!input) {
                          const inputChoices = document.querySelectorAll(`[data-row="${r - 1}"][data-col="${c}"] input[data-focusable]`)
                          input = inputChoices[inputChoices.length - 1]
                        }
                        input.focus()
                      }
                      break
                    case 'ArrowRight':
                      if (c < props.length - 1) {
                        const input = document.querySelector(`[data-row="${r}"][data-row-sub="${rs}"][data-col="${c + 1}"] input[data-focusable]`)
                        input.focus()
                      }
                      break
                    case 'ArrowDown':
                      if (r < rowMax - 1 || rs < firstRowSpan - 1) {
                        const input = document.querySelector(`[data-row="${r}"][data-row-sub="${rs + 1}"][data-col="${c}"] input[data-focusable]`)
                          ?? document.querySelector(`[data-row="${r + 1}"][data-row-sub="0"][data-col="${c}"] input[data-focusable]`)
                        if (input) input.focus()
                      }
                      break
                    case 'ArrowLeft':
                      if (c > nameIndexes[props[0].name]) {
                        const input = document.querySelector(`[data-row="${r}"][data-row-sub="${rs}"][data-col="${c - 1}"] input[data-focusable]`)
                        if (input) input.focus()
                      }
                      break
                  }
                }}
                onKeyUp={(event) => {
                  if (!autoSelect) return

                  switch (combinationKey.toLowerCase()) {
                    case 'alt':
                      if (!event.altKey) return
                      break
                    case 'ctrl':
                    case 'control':
                      if (!event.ctrlKey) return
                      break
                    case 'shift':
                      if (!event.shiftKey) return
                      break
                    default:
                      break
                  }

                  switch (event.key) {
                    case 'ArrowUp':
                    case 'ArrowRight':
                    case 'ArrowDown':
                    case 'ArrowLeft':
                      event.target.select()
                  }
                }}
                onChange={async (event) => {
                  const rowElm = event.target.closest("tr")
                  rowElm.dataset.modified = "true"

                  const cellElm = event.target.closest("td")
                  await prop.onChange && prop.onChange({
                    event: event,
                    name: event.target.name,
                    value: event.target.value,
                    row: cellElm.dataset.row * 1,
                    subRow: cellElm.dataset.subRow * 1,
                    col: cellElm.dataset.col * 1,
                  })
                }}
                onFocus={async (event) => {
                  const {value} = event.target
                  if (prop.editable && prop.digitGrouping && value && value.match(/[^0-9]+/ig)) {
                    event.target.value = value.replaceAll(/[^0-9]+/ig, "")
                  }
                }}
                onBlur={async (event) => {
                  const {value} = event.target
                  if (prop.editable && prop.digitGrouping && value && value.match(/^\d+$/)) {
                    event.target.value = (value * 1).toLocaleString()
                  }
                }}
              />
            ) : (
              prop.digitGrouping && typeof datum[prop.name] === "number"
                ? datum[prop.name].toLocaleString()
                : datum[prop.name]
            )
          }</td>
        })
      }
    </tr>
  )
}
