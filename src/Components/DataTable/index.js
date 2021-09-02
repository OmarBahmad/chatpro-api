import React from "react";
import * as S from "./styles";
import Table from "../Table";
import { ColumnsContact, ColumnsMessage } from "./columns";

export default function DataTable({ data, type }) {
  if (type === "contact") {
    return (
      <S.DataTable>
        <Table columns={ColumnsContact} data={data} />
      </S.DataTable>
    );
  } else if (type === "message") {
    return (
      <S.DataTable>
        <Table columns={ColumnsMessage} data={data} />
      </S.DataTable>
    );
  } else if (type === "file") {
    return (
      <S.DataTable>
        <Table columns={ColumnsContact} data={data} />
      </S.DataTable>
    );
  } else if(type === "localization") {
    return (
      <S.DataTable>
        <Table columns={ColumnsContact} data={data} />
      </S.DataTable>
    );
  }
  else {
      return null
  }
}
