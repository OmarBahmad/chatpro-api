import React from 'react';
import { getStatusCellphone } from '../../../Actions/Instances';

export default function Status() {
  async function getStatus() {
    try {
      const resp = await getStatusCellphone();
      console.log(resp);
    } catch (err) {
      console.log('erro');
    }
  }

  return (
    <div>
      <h2>Obter Status do Telefone</h2>
      <button onClick={getStatus}>Obter Status do telefone</button>
    </div>
  );
}
