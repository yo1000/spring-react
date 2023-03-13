import {Table} from "react-bootstrap";
import React from "react";
import {css} from "@emotion/react";

/**
 *
 * @param data Object Supported data formats are limited.
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
 * @param head Object
 * @param keys Array
 * @param editable boolean
 * @param combinationKey string
 * @returns {JSX.Element}
 * @constructor
 */
export default function DataTable({
  data, head, keys, editableKeys = [], combinationKey = ""
}) {
  const style = css`
    .evenRow {
      --bs-table-accent-bg: var(--bs-table-striped-bg);
      color: var(--bs-table-striped-color);
    }
    .oddRow {
    }
    input[readonly] {
      background-color: #e9ecef;;
      border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
      border-style: solid;
      border-width: 1px;
      border-radius: 2px;
    }
  `

  return (
    <Table css={style}>
      <thead>
      <tr>
        {keys && keys.length && keys.map(k => (
          <th>{(head && head[k]) ? head[k] : k}</th>
        ))}
      </tr>
      </thead>
      <tbody>
      <DataRows data={data} keys={keys} editableKeys={editableKeys} combinationKey={combinationKey} />
      </tbody>
    </Table>
  )
}

/**
 *
 * @param data Object
 * @param keys Array
 * @param editable boolean
 * @param combinationKey string
 * @returns {*}
 * @constructor
 */
function DataRows({
  data, keys, editableKeys = [], combinationKey
}) {
  const listKey = keys
    .filter(k => k.indexOf(".") >= 0)
    .map(k => k.match(/([^\.]+)\..+/))
    .filter(matched => matched && matched.length >= 1)
    .map(matched => matched[1])[0]

  return data && data.length && data.map((d, rowIndex) => (
    d[listKey] && d[listKey].length ? [...Array(d[listKey].length).keys()].map(rowSubIndex => {
      const newKeys = []
      const datum = {}
      if (rowSubIndex === 0) {
        for (const key of keys) {
          const k = key.startsWith(`${listKey}.`)
            ? key.substring(`${listKey}.`.length)
            : key
          console.log(k)
          newKeys[newKeys.length++] = key
          datum[key] = key.startsWith(`${listKey}.`) ? d[listKey][rowSubIndex][k] : d[k]
        }
      } else {
        for (const key of keys) {
          if (!key.startsWith(`${listKey}.`)) continue
          newKeys[newKeys.length++] = key
          datum[key] = d[listKey][rowSubIndex][key.substring(`${listKey}.`.length)]
        }
      }

      return <DataRow
        datum={datum}
        keys={newKeys}
        keysAll={keys}
        listKeyPrefix={listKey}
        rowMax={data.length}
        rowIndex={rowIndex}
        rowSubIndex={rowSubIndex}
        rowSpan={rowSubIndex === 0 ? d[listKey].length : 0}
        editableKeys={editableKeys}
        combinationKey={combinationKey}
      />
    }) : (
      <DataRow
        datum={d}
        keys={keys}
        keysAll={keys}
        rowMax={data.length}
        rowIndex={rowIndex}
        rowSubIndex={0}
        editableKeys={editableKeys}
        combinationKey={combinationKey}
      />
    )
  ))
}

/**
 *
 * @param datum Object
 * @param rowMax number
 * @param rowIndex number
 * @param rowSubIndex number
 * @param keys Array
 * @param keysAll Array
 * @param listKeyPrefix string
 * @param rowSpan number
 * @param editable boolean
 * @param combinationKey string
 * @returns {JSX.Element}
 * @constructor
 */
function DataRow({
  datum,
  rowMax, rowIndex, rowSubIndex, rowSpan,
  keys, keysAll, listKeyPrefix,
  editableKeys = [], combinationKey = ""
}) {
  const keyIndexes = {}
  for (let i = 0; i < keysAll.length; i++) {
    keyIndexes[keysAll[i]] = i
  }

  return (
    <tr>
      {keys && keys.length && keys.map((key) => {
        return (
          <td
            className={rowIndex % 2 == 0 ? "evenRow" : "oddRow"}
            rowSpan={(!key.startsWith(`${listKeyPrefix}.`)) ? rowSpan : null}
            data-row={rowIndex}
            data-row-sub={rowSubIndex}
            data-col={keyIndexes[key]}
          >
            {editableKeys ? <input defaultValue={editableKeys.includes(key) ? datum[key] : null} value={!editableKeys.includes(key) ? datum[key] : null} readOnly={!editableKeys.includes(key)} onKeyDown={(event) => {
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
                  break;
                case 'ctrl':
                  if (!event.ctrlKey) return
                  break;
                case 'shift':
                  if (!event.shiftKey) return
                  break;
                default:
                  break;
              }

              switch (event.key) {
                case 'ArrowUp':
                  if (r > 0 || rs > 0) {
                    let input = document.querySelector(`[data-row="${r}"][data-row-sub="${rs - 1}"][data-col="${c}"] input`)

                    if (!input) {
                      const inputChoices = document.querySelectorAll(`[data-row="${r - 1}"][data-col="${c}"] input`)
                      input = inputChoices[inputChoices.length - 1]
                    }

                    input.focus()
                  }
                  break;
                case 'ArrowRight':
                  if (c < keysAll.length - 1) {
                    document.querySelector(`[data-row="${r}"][data-row-sub="${rs}"][data-col="${c + 1}"] input`).focus()
                  }
                  break;
                case 'ArrowDown':
                  if (r < rowMax - 1 || rs < firstRowSpan - 1) {
                    const input = document.querySelector(`[data-row="${r}"][data-row-sub="${rs + 1}"][data-col="${c}"] input`)
                      ?? document.querySelector(`[data-row="${r + 1}"][data-row-sub="0"][data-col="${c}"] input`)

                    input.focus()
                  }
                  break;
                case 'ArrowLeft':
                  if (c > keyIndexes[keys[0]]) {
                    document.querySelector(`[data-row="${r}"][data-row-sub="${rs}"][data-col="${c - 1}"] input`).focus()
                  }
                  break;
              }
            }}/> : datum[key]}
          </td>
        )
      })}
    </tr>
  )
}
