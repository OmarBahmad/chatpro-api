import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { sendLocation } from '../../../../Actions/Message';
import { ValidNumber } from '../../../../hooks/ValidNumber';
import * as S from './styles';

export default function SendUniqueLocation() {
  const [address, setAddress] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  async function sendLocal() {
    const isValid = ValidNumber(number);
    if (!isValid) return toast.error('Número Invalido');

    const obj = {
      address,
      lat: Number(lat),
      lng: Number(lng),
      name,
      number,
    };
    try {
      await sendLocation(obj);
      toast.success('Localização Enviada com sucesso!');
    } catch (err) {
      toast.error('Localização não enviada!');
    }
    setAddress('');
    setLat('');
    setLng('');
    setName('');
    setNumber('');
  }
  return (
    <S.Container>
      <S.ContainerCard>
        <S.ContainerHeaderCard>
          <h3>Enviar uma localização</h3>
        </S.ContainerHeaderCard>
        <S.Input
          placeholder="Endereço"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <S.Input
          placeholder="Latitude (opcional)"
          type="number"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
        <S.Input
          placeholder="Longitude (opcional)"
          type="number"
          value={lng}
          onChange={(e) => setLng(e.target.value)}
        />
        <S.Input
          placeholder="Nome do local"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <S.Input
          placeholder="Número"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <S.ButtonSend
          onClick={sendLocal}
          disabled={address === '' || name === '' || number === ''}
        >
          Enviar Localização
        </S.ButtonSend>
      </S.ContainerCard>
    </S.Container>
  );
}
