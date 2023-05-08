import {css} from "@emotion/react";

export const style = css`
  height: 100vh;
  padding: 0 2rem;
  
  .userDisplayName {
    margin-right: 1rem;
  }

  .main {
    margin-top: 1rem;
  }

  .dataTable {
    .dataTableHead {
      table {
        min-width: inherit;
      }
    }
    
    .dataTableBody {
      max-height: calc(100vh - 8rem);
      height: calc(100vh - 8rem);

      table {
        min-width: inherit;
      }
    }
  }
  
  nav {
    display: flex;
    border-bottom: 2px solid var(--spectrum-global-color-gray-300);
    
    ul {
      display: inline-flex;
      list-style: none;
      padding: 0;
      margin: 0;
      
      &.right {
        position: absolute;
        right: 2rem;
      }
      
      li {
        display: inline-flex;

        &:first-of-type {
          margin-right: 1rem;
        }

        a {
          display: block;
          text-decoration: none !important;
          color: var(--spectrum-nav-item-text-color, var(--spectrum-alias-text-color));

          &.active,
          &:hover {
            color: var(--spectrum-nav-item-text-color, var(--spectrum-alias-text-color));
            border-bottom: 2px solid var(--spectrum-global-color-gray-900);
            padding-top: calc(.75rem + 2px);
          }
        }
        
        a,
        div,
        button {
          position: relative;
          padding: .75rem .75rem;
          margin: auto;
          top: 2px;
        }
      } 
    }
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    
    thead {
      th {
        height: 34px;
        text-align: left;

        padding: var(--spectrum-table-header-padding-y,var(--spectrum-global-dimension-static-size-125))var(--spectrum-table-header-padding-x,var(--spectrum-global-dimension-size-200));
        padding-top: 0;
        padding-bottom: 0;
      }
    }
    
    tbody {
      tr {
        background-color: var(--spectrum-table-background-color,var(--spectrum-global-color-gray-50));
      }
      
      td {
        padding: var(--spectrum-global-dimension-size-125)var(--spectrum-table-cell-padding-x,var(--spectrum-global-dimension-size-200));

        background-color: var(--spectrum-table-cell-background-color,var(--spectrum-alias-background-color-transparent));
        color: var(--spectrum-table-cell-text-color,var(--spectrum-alias-text-color));

        border: 1px solid var(--spectrum-table-border-color,var(--spectrum-alias-border-color-mid));
        border-bottom-width: 0;
        border-left-width: 0;
        border-right-width: 0;
      }
      
      tr:hover td {
        background-color: var(--spectrum-table-row-background-color-hover,var(--spectrum-alias-highlight-hover));
      }

      tr:first-of-type td {
        border-top-width: 1px;
      }

      tr:last-of-type td {
        border-bottom-width: 2px;
      }

      tr td:first-of-type {
        border-left-width: 1px;
      }

      tr td:last-of-type {
        border-right-width: 1px;
      }
      
      tr:first-of-type td:first-of-type {
        border-radius:
          var(--spectrum-textfield-border-radius, var(--spectrum-alias-border-radius-regular))
          0
          0
          0;
      }

      tr:first-of-type td:last-of-type {
        border-radius:
          0
          var(--spectrum-textfield-border-radius, var(--spectrum-alias-border-radius-regular))
          0
          0;
      }

      tr:last-of-type td:last-of-type {
        border-radius:
          0
          0
          var(--spectrum-textfield-border-radius, var(--spectrum-alias-border-radius-regular))
          0;
      }

      tr:last-of-type td:first-of-type {
        border-radius:
          0
          0
          0
          var(--spectrum-textfield-border-radius, var(--spectrum-alias-border-radius-regular));
      }
    }
    
    ul {
      margin: 0;
      
      li {
        margin: .5rem 0;
        
        &:first-of-type {
          margin-top: 0;
        }
        
        &:last-of-type {
          margin-bottom: 0;
        }
        
        >* {
          margin-right: .5rem;
        }
      }
    }
  }

  .dataTableBody {
    .editable td {
      padding:
        calc(var(--spectrum-table-header-padding-y, var(--spectrum-global-dimension-static-size-125)) - 1px)
        var(--spectrum-table-header-padding-x, var(--spectrum-global-dimension-size-200));
    }

    .evenRow td {
      background-color: var(--spectrum-table-cell-background-color, var(--spectrum-alias-background-color-transparent));
    }
    .oddRow td {
      background-color: var(--spectrum-table-row-background-color-hover, var(--spectrum-alias-highlight-hover));
    }

    .subRow td {
      padding-top: 0;
      border-width: 0;

      &:last-of-type {
        border-right-width: 1px;
      }
    }

    input {
      width: calc(100% - 8px);
      height: 100%;
      border: 1px solid var(--spectrum-table-border-color, var(--spectrum-alias-border-color-mid));
      border-radius: var(--spectrum-textfield-border-radius, var(--spectrum-alias-border-radius-regular));

      background: transparent;
      font-family: monospace;

      padding: 3px var(--spectrum-textfield-padding-x, var(--spectrum-global-dimension-size-150)) 5px calc(var(--spectrum-textfield-padding-x, var(--spectrum-global-dimension-size-150)) - 1px);
      padding-left: 4px;
      padding-right: 4px;

      &[readonly] {
        color: var(--spectrum-table-cell-text-color-disabled,var(--spectrum-alias-text-color-disabled));
      }
    }
  }
`
