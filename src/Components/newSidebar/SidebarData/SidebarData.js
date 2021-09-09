import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Mensagens',
    path: '/messages/text',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Enviar Mensagem de Texto',
        path: '/messages/text',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Enviar Arquivo',
        path: '/messages/file',
        icon: <IoIcons.IoIosPaper />
      },      {
        title: 'Enviar Localização',
        path: '/messages/localization',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Enviar Contato',
        path: '/messages/contact',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Excluir Mensagem',
        path: '/messages/delete',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Chat',
    path: '/chat',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Contatos',
    path: '/contacts',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Grupos',
    path: '/groups',
    icon: <IoIcons.IoMdPeople />
  },

  {
    title: 'Status',
    path: '/status',
    icon: <IoIcons.IoMdPeople />
  },

  {
    title: 'Sair',
    path: '/logout',
    icon: <IoIcons.IoMdHelpCircle />
  }
];