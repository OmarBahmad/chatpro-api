/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { getProfile } from '../../../Actions/Contacts';
import * as S from './styles';
import { ValidNumber } from '../../../hooks/ValidNumber';

export default function GetUniqueContact() {
  const [number, setNumber] = useState('');
  const [data, setData] = useState([]);
  const [respTrue, setRespTrue] = useState(false);

  async function sendCTT() {
    const isValid = ValidNumber(number);
    if (!isValid) return toast.error('Número Invalido');
    const obj = {
      number,
    };
    try {
      const resp = await getProfile(obj);

      if (resp && resp?.code !== 400) {
        setData(resp);
        toast.success('Contato obtido com sucesso.');
        setData(resp);
        setRespTrue(true);
      } else {
        toast.error('Não foi possível efetuar a busca!');
      }
    } catch (err) {
      console.log('erro');
    }
    setNumber('');
  }
  return (
    <S.Container>
      <S.ContainerHeader>
        <h3>Buscar Contato</h3>
      </S.ContainerHeader>
      <S.ContainerContact>
        <S.ContainerCard>
          <S.ContainerHeaderCard>
            <h3>Obter Perfil</h3>
          </S.ContainerHeaderCard>
          <S.InputNumber
            placeholder="Número de telefone"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <S.ButtonSend onClick={sendCTT} disabled={number === ''}>
            Obter Contato
          </S.ButtonSend>
        </S.ContainerCard>

        {respTrue && (
          <S.ContainerResp>
            <S.ContainerRespColumn1>
              <p>
                <strong>Nome: </strong>
                {data.name}
              </p>
              <p>
                <strong>Número: </strong>
                {data.jid.replace('@s.whatsapp.net', '')}
              </p>
            </S.ContainerRespColumn1>
            <S.ContainerRespColumn2>
              <img src={data.eurl} height="100%" width="200px" />
            </S.ContainerRespColumn2>
          </S.ContainerResp>
        )}
      </S.ContainerContact>
    </S.Container>
  );
}

/*
number: "62982530552"
*/
