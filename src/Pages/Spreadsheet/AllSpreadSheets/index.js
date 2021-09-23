import React, { useState } from "react";
import ExportExcelMessageSucess from "../../../Components/ExportExcel/ExportExcelMessageSucess";
import * as S from "./styles";

export default function AllSpreadSheets() {
  const [respTrue] = useState([]);

  return (
    <S.Container>
      <S.ContainerCard>
        <S.ContainerHeaderCard>
          <h3>Mensagens de texto</h3>
        </S.ContainerHeaderCard>
        <ExportExcelMessageSucess
          respTrue={respTrue}
          collum1="number"
          collum2="message"
          nameButton="Download da planilha de disparos de mensagem"
          nameFile="Disparos de mensagens"
        />
      </S.ContainerCard>
      <S.ContainerCard>
        <S.ContainerHeaderCard>
          <h3>Arquivos</h3>
        </S.ContainerHeaderCard>
        <ExportExcelMessageSucess
          respTrue={respTrue}
          collum1="number"
          collum2="caption"
          collum3="url"
          nameButton="Download da planilha de disparos de arquivo"
          nameFile="Disparos de arquivos"
        />
      </S.ContainerCard>
      <S.ContainerCard>
        <S.ContainerHeaderCard>
          <h3>Localizações</h3>
        </S.ContainerHeaderCard>
        <ExportExcelMessageSucess
          respTrue={respTrue}
          collum1="address"
          collum2="lat"
          collum3="lng"
          collum4="name"
          collum5="number"
          nameButton="Download da planilha de disparos de localização"
          nameFile="Disparo de localizações"
        />
      </S.ContainerCard>
      <S.ContainerCard>
        <S.ContainerHeaderCard>
          <h3>Contatos</h3>
        </S.ContainerHeaderCard>
        <ExportExcelMessageSucess
          respTrue={respTrue}
          collum1="number"
          collum2="contact_name"
          collum3="contact_number"
          nameButton="Download da planilha de disparos de contato"
          nameFile="Disparo de Contatos"
        />
      </S.ContainerCard>
    </S.Container>
  );
}
