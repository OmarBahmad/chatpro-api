import React from 'react';
import { Sidebar } from '../../Components/Sidebar';
import { Container } from '../../Components/Container';
import RefreshWebhook from './RefreshWebhook';
import Status from './Status';
import UpdateProfile from './UpdateProfile';
import QRCode from './GenerateQRCode';
import Reload from './Reload';
import RemoveSession from './RemoveSession';

export default function Instance() {
  return (
    <>
      <Sidebar />
      <Container>
        <QRCode />
        <Reload />
        <RemoveSession />
        <Status />
        <UpdateProfile />
        <RefreshWebhook />
      </Container>
    </>
  );
}
