import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

import { sendTextStatus } from '../../../Actions/Status';
import * as S from './styles';

export default function SendText() {
  const [textStatus, setTextStatus] = useState('');

  async function sendStatus() {
    const obj = {
      text: textStatus,
    };
    try {
      const resp = await sendTextStatus(obj);

      if (resp?.status === 200) {
        toast.success('Status adicionado com sucesso.');
        setTextStatus('');
      } else {
        toast.error('Não foi possível adicionar o Status');
      }
    } catch (err) {
      console.log('erro');
    }
  }

  return (
    <S.Container>
      <S.ContainerCard>
        <S.ContainerHeaderCard>
          <h3>Adicionar status de texto</h3>
        </S.ContainerHeaderCard>
        <S.InputNumber
          placeholder="Texto"
          value={textStatus}
          onChange={(e) => setTextStatus(e.target.value)}
        />
        <S.ButtonSend onClick={sendStatus} disabled={textStatus === ''}>
          Adicionar Status de Texto
        </S.ButtonSend>
      </S.ContainerCard>
    </S.Container>
  );
}
