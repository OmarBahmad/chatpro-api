import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { sendImageStatus } from '../../../Actions/Status';
import * as S from './styles';

export default function SendImg() {
  const [caption, setCaption] = useState('');
  const [url, setUrl] = useState('');

  async function sendStatus() {
    const obj = {
      caption,
      url,
    };
    try {
      const resp = await sendImageStatus(obj);

      if (resp?.status === 200) {
        toast.success('Status adicionado com sucesso.');
        setCaption('');
        setUrl('');
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
          <h3>Adicionar status de imagem</h3>
        </S.ContainerHeaderCard>
        <S.InputNumber
          placeholder="Texto do Status"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <S.InputMessage
          placeholder="Imagem do Status (URL)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <S.ButtonSend
          onClick={sendStatus}
          disabled={caption === '' || url === ''}
        >
          Adicionar Status de Imagem
        </S.ButtonSend>
      </S.ContainerCard>
    </S.Container>
  );
}
