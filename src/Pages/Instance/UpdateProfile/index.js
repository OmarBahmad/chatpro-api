import React, { useState } from 'react';
import { updatePhoto } from '../../../Actions/Instances';

export default function UpdateProfile() {
  const [url, setUrl] = useState('');

  async function updatePicture() {
    const obj = {
      url,
    };
    try {
      await updatePhoto(obj);
      alert('Foto Alterada com Sucesso');
    } catch (err) {
      console.log('erro');
    }
    setUrl('');
  }
  return (
    <div>
      <h2>Alterar Foto de Perfil</h2>
      <input
        placeholder="URL"
        className="input-msg"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={updatePicture}>Alterar Foto</button>
    </div>
  );
}
