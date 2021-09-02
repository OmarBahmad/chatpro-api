import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const ImportMessage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ButtonFile = styled.button`
  font-weight: 500;
  color: rgb(255, 255, 255);
  outline: none;
  border-radius: 0.4rem;
  padding: 0.8rem 2rem;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  background: rgb(4, 170, 109);
  border: 1px solid rgb(4, 170, 109);
  margin-left: 1rem;

  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const CardQuant = styled.div`
  margin-top: 1rem;
  font-size: 20px;
`;
export const DataTable = styled.div`
padding: 1rem;

table {
  border-spacing: 0;
  border: 1px solid black;

  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th,
  td {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid black;
    border-right: 1px solid black;

    :last-child {
      border-right: 0;
    }
  }
}

.pagination {
  padding: 0.5rem;
}
`