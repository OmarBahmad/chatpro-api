import React from 'react';
import { DisconnectWhatsapp } from '../../../Actions/Instances';

export default function Disconnect() {
  async function getDisconnect() {
    try {
      const resp = await DisconnectWhatsapp();
      console.log(resp);
    } catch (err) {
      console.log('erro');
    }
  }

  return (
    <div>
      <h2>Desconectar instância</h2>
      <button onClick={getDisconnect}>Desconectar instância</button>
    </div>
  );
}
