import styled from 'styled-components';

export const DataTable = styled.div`
  width: 100vh;

  table {
    border-spacing: 0;
    border: 1px solid black;
    width: 100%;
    font-size: 16px;

    tr {
      :last-child {
        td {
          max-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.75rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      max-width: 0;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`;
