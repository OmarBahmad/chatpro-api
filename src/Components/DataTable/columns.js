export const ColumnsContact = [
  {
    Header: 'Disparo de Contatos',
    columns: [
      {
        Header: `Índice`,
        accessor: `index`,
      },
      {
        Header: 'Número',
        accessor: `number`,
      },
      {
        Header: 'Nome',
        accessor: 'contact_name',
      },
      {
        Header: 'Número do Contato',
        accessor: 'contact_number',
      },
      {
        Header: 'Status de Envio',
        accessor: 'checkMsg',
      },
    ],
  },
];

export const ColumnsMessage = [
  {
    Header: 'Disparo de Mensagens',
    columns: [
      {
        Header: 'Índice',
        accessor: `index`,
      },
      {
        Header: 'Número',
        accessor: `number`,
      },
      {
        Header: 'Mensagem',
        accessor: 'message',
      },
      {
        Header: 'Status de Envio',
        accessor: 'checkMsg',
      },
    ],
  },
];
export const ColumnsFile = [
  {
    Header: 'Disparo de Arquivos',
    columns: [
      {
        Header: 'Índice',
        accessor: `index`,
      },
      {
        Header: 'Número',
        accessor: `number`,
      },
      {
        Header: 'Nome do Arquivo',
        accessor: 'caption',
      },
      {
        Header: 'Status de Envio',
        accessor: 'checkMsg',
      },
    ],
  },
];
export const ColumnsLocation = [
  {
    Header: 'Disparo de Localizações',
    columns: [
      {
        Header: 'Índice',
        accessor: `index`,
      },
      {
        Header: 'Número',
        accessor: `address`,
      },
      {
        Header: 'Nome do Local',
        accessor: 'name',
      },
      {
        Header: 'Número do Contato',
        accessor: 'number',
      },
      {
        Header: 'Status de Envio',
        accessor: 'checkMsg',
      },
    ],
  },
];
export const ColumnsDelete = [
  {
    Header: 'Disparo de Mensagens',
    columns: [
      {
        Header: 'Índice',
        accessor: `index`,
      },
      {
        Header: 'chatJid',
        accessor: `chatJid`,
      },
      {
        Header: 'MessageID',
        accessor: 'messageID',
      },
      {
        Header: 'Status de Envio',
        accessor: 'checkMsg',
      },
    ],
  },
];
export const ColumnsChat = [
  {
    Header: 'Disparo de Mensagens',
    columns: [
      {
        Header: 'Índice',
        accessor: `index`,
      },
      {
        Header: 'Jid',
        accessor: `Jid`,
      },
      {
        Header: 'LastMessageTime',
        accessor: `LastMessageTime`,
      },
    ],
  },
];

export const ColumnsGroups = [
  {
    Header: 'Grupos',
    columns: [
      {
        Header: 'Nome do Grupo',
        accessor: `Name`,
      },
      {
        Header: 'Jid',
        accessor: `Jid`,
      },
    ],
  },
];
