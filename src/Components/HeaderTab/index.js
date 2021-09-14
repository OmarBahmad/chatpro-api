import React from "react";
import { NavLink } from "react-router-dom";

import * as S from "./styles";

export default function HeaderTab() {
  return (
    <S.Container>
      <S.ContainerItens>
        <NavLink to="/messages/text">
          <span>Mensagem</span>
        </NavLink>
      </S.ContainerItens>
      <S.ContainerItens>
        <NavLink to="/messages/file">
          <span>Arquivo</span>
        </NavLink>
      </S.ContainerItens>
      <S.ContainerItens>
        <NavLink to="/messages/localization">
          <span>Localização</span>
        </NavLink>
      </S.ContainerItens>
      <S.ContainerItens>
        <NavLink to="/messages/contact">
          <span>Contato</span>
        </NavLink>
      </S.ContainerItens>
      <S.ContainerItens>
        <NavLink to="/messages/delete">
          <span>Excluir</span>
        </NavLink>
      </S.ContainerItens>
    </S.Container>
  );
}
