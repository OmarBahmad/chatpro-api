import React, { useState } from 'react';
import { sendContact } from '../../../Actions/Message';

export default function SendMessageTemplate() {
  const [contact_name, setContactName] = useState('');
  const [contact_number, setContactNumber] = useState('');
  const [number, setNumber] = useState('');

  async function sendMessageTpt() {
    const obj = {
      contact_name,
      contact_number,
      number,
    };
    try {
      await sendContact(obj);
      alert('Contato enviado com sucesso.');
    } catch (err) {
      console.log('erro');
    }
    setContactNumber('');
    setNumber('');
  }
  return (
    <div>
      <h2>Enviar Template de Mensagem</h2>
      <input
        placeholder="Template da mensagem"
        value={contact_name}
        onChange={(e) => setContactName(e.target.value)}
      />
      <input
        placeholder="Número"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={sendMessageTpt}>Enviar Mensagem</button>
    </div>
  );
}
