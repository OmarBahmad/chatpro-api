import { ReactComponent as Inbox } from "../../Assets/svg/inbox.svg";
import { ReactComponent as MessageCircle } from "../../Assets/svg/message-circle.svg";
import { ReactComponent as LogoutIcon } from "../../Assets/svg/log-out.svg";
import { ReactComponent as User } from "../../Assets/svg/user.svg";
import { ReactComponent as Users } from "../../Assets/svg/users.svg";
import { ReactComponent as StatusIcon } from "../../Assets/svg/message-square.svg";
import { ReactComponent as Spreadsheet } from "../../Assets/svg/database.svg";


import { NavLink } from "react-router-dom";

import * as S from "./styles";

export const Sidebar = () => {
  return (
    <S.Wrapper>
      <S.MenuWrapper>
        <S.ItensWrapper>
          <NavLink to="/messages/text">
            <S.Item>
              <Inbox />
            </S.Item>
          </NavLink>
          <NavLink to="/chat">
            <S.Item>
              <MessageCircle />
            </S.Item>
          </NavLink>
          <NavLink to="/contacts">
            <S.Item>
              <User />
            </S.Item>
          </NavLink>
          <NavLink to="/groups">
            <S.Item>
              <Users />
            </S.Item>
          </NavLink>
          <NavLink to="/status">
            <S.Item>
              <StatusIcon />
            </S.Item>
          </NavLink>
          <NavLink to="/spreadsheet">
            <S.Item>
              <Spreadsheet />
            </S.Item>
          </NavLink>
          <NavLink to="/logout">
            <S.Item>
              <LogoutIcon />
            </S.Item>
          </NavLink>
        </S.ItensWrapper>
      </S.MenuWrapper>
    </S.Wrapper>
  );
};
