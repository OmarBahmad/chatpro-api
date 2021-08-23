import { ReactComponent as GithubSvg } from "../../Assets/svg/github_icon.svg";

import { NavLink } from "react-router-dom";
import Logout from "../Logout";
import * as S from "./styles";



export const Sidebar = () => {


  return (
    <S.Wrapper>
      <S.MenuWrapper>
        <S.ItensWrapper>
          <NavLink to="/message">
            <S.Item>
              <GithubSvg />
              <span>Mensagens</span>
            </S.Item>
          </NavLink>
          <NavLink to="/chat">
            <S.Item>
              <GithubSvg />
              <span>Chat</span>
            </S.Item>
          </NavLink>
          <NavLink to="/contacts">
            <S.Item>
              <GithubSvg />
              <span>Contatos</span>
            </S.Item>
          </NavLink>
          <NavLink to="/group">
            <S.Item>
              <GithubSvg />
              <span>Grupos</span>
            </S.Item>
          </NavLink>
          <NavLink to="/status">
            <S.Item>
              <GithubSvg />
              <span>Status</span>
            </S.Item>
          </NavLink>
          <NavLink to="/" end onClick={Logout} >
            <S.Item>
              <GithubSvg />
              <span>Sair</span>
            </S.Item>
          </NavLink>

        </S.ItensWrapper>
      </S.MenuWrapper>
    </S.Wrapper>
  );
};

/*
 <BrandLogo role="img" alt="Logo da empresa ChatPro" className="logo" />
              <HomeSvg />
              <LayersSvg />
              <GithubSvg />
              <SlackSvg />
            <LogoutSvg />

                      <a href={GITHUB_ISSUES} target="_blank" rel="noreferrer">
            <S.Item>
              <span>Github Issues</span>
            </S.Item>
          </a>

          <a href={SLACK_CHANNEL} target="_blank" rel="noreferrer">
            <S.Item>
              <span>Canal Slack</span>
            </S.Item>
          </a>
                  <NavLink to="/login" end onClick={logout}>
          <S.Item>
            <span>Sair</span>
          </S.Item>
        </NavLink>

                  <NavLink to="/instance">
            <S.Item>
              <GithubSvg />
              <span>Instância</span>
            </S.Item>
          </NavLink>
*/
