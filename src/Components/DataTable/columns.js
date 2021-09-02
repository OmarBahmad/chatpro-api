
export const ColumnsContact  =  [
      {
        Header: "Name",
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
            accessor: "contact_name",
          },
          {
            Header: 'Número do Contato',
            accessor: "contact_number",
          },
          {
            Header: 'Status de Envio',
            accessor: "checkMsg",
          },
        ],
      },
]


export const ColumnsMessage  =  [
    {
      Header: "Name",
      columns: [
        {
          Header: 'Mudei',
          accessor: `index`,
        },
        {
          Header: 'Número',
          accessor: `number`,
        },
        {
          Header: 'Nome',
          accessor: "contact_name",
        },
        {
          Header: 'Número do Contato',
          accessor: "contact_number",
        },
        {
          Header: 'Status de Envio',
          accessor: "checkMsg",
        },
      ],
    },
]
