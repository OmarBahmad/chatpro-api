import React, { useState } from 'react';
import { getQRCode } from '../../../Actions/Instances';

export default function QRCode() {
  const [webhook, setWebhook] = useState('');

  async function getQR() {
    const obj = {
      webhook,
    };
    try {
      await getQRCode(obj);
      alert('Webhook Enviado');
      const resp = await getQRCode();
      console.log(resp);
    } catch (err) {
      console.log('erro');
    }
  }

  return (
    <div>
      <h2>Gerar novo QRCode</h2>
      <p>Gera um QR Code em caso de não conseguir pelo painel</p>
      <input
        placeholder="Gerar novo QR Code"
        className="input-msg"
        value={webhook}
        onChange={(e) => setWebhook(e.target.value)}
      />
      <button onClick={getQR}>Gerar nvo QRCode</button>
    </div>
  );
}
