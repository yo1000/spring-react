import {Table} from "react-bootstrap";
import React from "react";

/**
 *
 * @param data Array
 * @param head Object
 * @param keys Array
 * @returns {JSX.Element}
 * @constructor
 */
export default function DataTable({data, head, keys, editable = false, combinationKey = ""}) {
  return (
    <Table striped>
      <thead>
      <tr>
        {keys && keys.length && keys.map(k => (
          <th>{(head && head[k]) ? head[k] : k}</th>
        ))}
      </tr>
      </thead>
      <tbody>
      {data && data.length && data.map((d, rowIndex) => (
        <tr>
        {keys && keys.length && keys.map((k, colIndex) => (
          <td>{editable ? <input data-row={rowIndex} data-col={colIndex} value={d[k]} onKeyDown={(event) => {
            const target = event.target
            const r = target.dataset.row * 1 || 0
            const c = target.dataset.col * 1 || 0

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
                if (r > 0) {
                  document.querySelector(`[data-row='${r - 1}'][data-col='${c}']`).focus()
                }
                break;
              case 'ArrowRight':
                if (c < keys.length - 1) {
                  document.querySelector(`[data-row='${r}'][data-col='${c + 1}']`).focus()
                }
                break;
              case 'ArrowDown':
                if (r < data.length - 1) {
                  document.querySelector(`[data-row='${r + 1}'][data-col='${c}']`).focus()
                }
                break;
              case 'ArrowLeft':
                if (c > 0) {
                  document.querySelector(`[data-row='${r}'][data-col='${c - 1}']`).focus()
                }
                break;
            }
          }}/> : d[k]}</td>
        ))}
        </tr>
      ))}
      </tbody>
    </Table>
  )
}
