import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import * as S from './styles';
import { getChat } from '../../../Actions/Chat';
import ExportExcelMessageSucess from '../../../Components/ExportExcel/ExportExcelMessageSucess';

export default function GetChat() {
  const [chatUnique, SetChatUnique] = useState([]);
  const [chatGroup, setChatGroup] = useState([]);
  const [listaTransmissao, setListaTransmisao] = useState([]);

  async function postB() {
    try {
      const resp = await getChat();

      //verificar quando esta certo resp.code === 400 celular nao conectado
      if (resp.length && resp?.code !== 400) {
        const group = await resp?.filter((group) =>
          group.Jid.includes('@g.us')
        );

        const unique = await resp?.filter((chat) =>
          chat.Jid.includes('@s.whatsapp.net')
        );

        const broadcast = await resp?.filter((index) =>
          index.Jid.includes('@broadcast')
        );

        setChatGroup(group);
        SetChatUnique(unique);
        setListaTransmisao(broadcast);

        /*for(let i = 0; i<resp.length; i++){
        setRespAll((index) => [
          ...index,
          {
            Jid: resp[i].Jid,
            LastMessageTime: resp[i].LastMessageTime,
          },
        ]);
      }
*/

        toast.success('Lista de chats retornadas com sucesso!');
      } else {
        toast.error('Não foi possível efetuar a busca!');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <S.Container>
      <S.ContainerHeader>
        <h3>Retornar lista de Chat </h3>
      </S.ContainerHeader>
      <S.ContainerExcel>
        <S.ButtonCreate onClick={postB}>Retornar lista de Chats</S.ButtonCreate>
      </S.ContainerExcel>
      <S.ContainerExcel>
        {chatUnique.length > 0 && (
          <>
            <ExportExcelMessageSucess
              respTrue={chatUnique}
              collum1="Jid"
              collum2="Name"
              collum3="message"
              nameButton="Download das conversas individuais"
              nameFile={'Conversas Individuais'}
            />
          </>
        )}

        {chatGroup.length > 0 && (
          <>
            <ExportExcelMessageSucess
              respTrue={chatGroup}
              collum1="Jid"
              collum2="Name"
              collum3="message"
              nameButton="Download dos grupos"
              nameFile={'Grupos'}
            />
          </>
        )}

        {listaTransmissao.length > 0 && (
          <>
            <ExportExcelMessageSucess
              respTrue={listaTransmissao}
              collum1="Jid"
              collum2="Name"
              collum3="message"
              nameButton="Download da Lista de transmissão"
              nameFile={'Lista de transmissao'}
            />
          </>
        )}
      </S.ContainerExcel>
    </S.Container>
  );
}

//<DataTable type="chat" data={respAll} />
