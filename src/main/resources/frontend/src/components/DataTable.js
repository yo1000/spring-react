import {Table} from "react-bootstrap"
import React from "react"

/**
 * @typedef {object} Props
 * @property {string} name
 * @property {string?} head
 * @property {boolean?} editable
 * @property {number?} maxLength
 * @property {string?} columnWidth
 * @property {boolean?} digitGrouping
 * @property {Function?} onChange
 */

/**
 *
 * @param {string} id
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
 * @param {string} combinationKey
 * @param {boolean} autoSelect
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
  const autoWidth = props.some(p => !p.columnWidth) && `${100 / props.length}%`

  return (
    <div id={id}>
      <div className="dataTableHead" style={{
        overflowX: "hidden",
        overflowY: "scroll",
      }}>
        <Table size="sm">
          <thead>
          <tr>
            {props.map(prop => (
              <th style={autoWidth ? {
                width: autoWidth,
                minWidth: autoWidth,
                maxWidth: autoWidth,
              } : {
                width: prop.columnWidth,
                minWidth: prop.columnWidth,
                maxWidth: prop.columnWidth,
              }}>
                {prop.head}
              </th>
            ))}
          </tr>
          </thead>
        </Table>
      </div>
      <div className="dataTableBody" style={{
        overflowX: "hidden",
        overflowY: "scroll",
      }}>
        <Table size="sm">
          <tbody>
          <DataRows
            data={data}
            props={props}
            combinationKey={combinationKey}
            autoSelect={autoSelect}
            autoWidth={autoWidth}
          />
          </tbody>
        </Table>
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
  const listName = propNames.filter(n => n.indexOf(".") > 0)
    .map(n => n.match(/([^\.]+)\..+/))
    .filter(matched => matched && matched.length >= 1)
    .map(matched => matched[1])[0]

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
    <tr data-modified={false}>
      {
        props.map((prop, index) => {
          if (rowSubIndex > 0 && (!prop.name.startsWith(`${listName}.`))) return

          return <td
            className={(
              (rowIndex % 2 === 0 ? " evenRow " : " oddRow ") +
              (prop.digitGrouping ? " digitGrouping " : "")
            ).trim()}
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
