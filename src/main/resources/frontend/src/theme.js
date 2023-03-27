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
  }
`
