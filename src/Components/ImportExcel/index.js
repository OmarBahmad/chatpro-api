/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import * as XLSX from 'xlsx';
import * as S from './styles';

export default function ImportExcel({ setItems }) {
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: 'buffer' });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });
  };

  return (
    <>
      <S.LabelFile for="selecao-arquivo">Selecionar um arquivo</S.LabelFile>
      <S.InputFile
        type="file"
        id="selecao-arquivo"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />
    </>
  );
}
