import React, { useState } from "react";
import * as S from "./Styles";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData/SidebarData";
import SubMenu from "./SidebarMenu/SubMenu";
import { IconContext } from "react-icons/lib";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <S.Nav>
          <S.NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </S.NavIcon>
        </S.Nav>
        <S.SidebarNav sidebar={sidebar}>
          <S.SidebarWrap>
            <S.NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </S.NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </S.SidebarWrap>
        </S.SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
