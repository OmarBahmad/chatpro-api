import React from "react";
import * as S from "./styles";
import Table from "../Table";
import {
  ColumnsContact,
  ColumnsMessage,
  ColumnsFile,
  ColumnsDelete,
  ColumnsLocation,
  ColumnsChat,
} from "./columns";

const typeColumns = {
  contact: ColumnsContact,
  delete: ColumnsDelete,
  file: ColumnsFile,
  message: ColumnsMessage,
  location: ColumnsLocation,
  chat: ColumnsChat,
};

export default function DataTable({ data, type }) {
  return (
    <S.DataTable>
      <Table columns={typeColumns[type]} data={data} />
    </S.DataTable>
  );
}
