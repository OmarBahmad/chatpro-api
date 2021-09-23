import React, { useState } from 'react';
import { updateWebhook } from '../../../Actions/Instances';

export default function RefreshWebhook() {
  const [webhook, setWebhook] = useState('');

  async function updatePicture() {
    const obj = {
      webhook,
    };
    try {
      await updateWebhook(obj);
      alert('Foto Alterada com Sucesso');
    } catch (err) {
      console.log('erro');
    }
    setWebhook('');
  }
  return (
    <div>
      <h2>Atualizar Webhook</h2>
      <p>Atualiza o servidor Webhook</p>
      <br />
      <input
        placeholder="URL"
        className="input-msg"
        value={webhook}
        onChange={(e) => setWebhook(e.target.value)}
      />
      <button onClick={updatePicture}>Atualizar Webhook</button>
    </div>
  );
}
