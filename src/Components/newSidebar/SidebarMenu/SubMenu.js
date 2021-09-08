import React, { useState } from "react";
import * as S from "./styles";

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <S.SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <S.SidebarLabel>{item.title}</S.SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </S.SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <S.DropdownLink to={item.path} key={index}>
              {item.icon}
              <S.SidebarLabel>{item.title}</S.SidebarLabel>
            </S.DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
