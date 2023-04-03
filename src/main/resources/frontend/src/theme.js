import {css} from "@emotion/react";

export const style = css`
  .userDisplayName {
    margin-right: 1rem;
  }

  .main {
    margin-top: 6rem;
    margin-bottom: 4rem;
  }

  #dataTable {
    overflow-x: scroll;
    
    .digitGrouping,
    .digitGrouping input {
      text-align: right;
    }
    
    th,
    td {
      border-right: 1px solid var(--bs-border-color);
    }

    .dataTableHead,
    .dataTableBody {
      width: fit-content;
      min-width: 100%;

      .table {
        margin: 0;
      }
    }
    
    .dataTableBody {
      max-height: calc(100vh - 240px);
      height: calc(100vh - 240px);

      .evenRow {
        --bs-table-accent-bg: var(--bs-table-striped-bg);
        color: var(--bs-table-striped-color);
      }
      .oddRow {
      }
      
      input {
        width: 100%;
        font-family: monospace;

        &[readonly] {
          background-color: #e9ecef;;
          border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
          border-style: solid;
          border-width: 1px;
          border-radius: 2px;
        }
      }
    }
  }
`
