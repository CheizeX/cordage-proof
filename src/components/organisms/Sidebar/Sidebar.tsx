import { useState } from "react";
import { theme } from "../../../themes/theme";
import IconButton from "../../molecules/IconButton/IconButton";
import * as S from "./Sidebar.styles";
import SidebarTop from "./SidebarTop/SidebarTop";
import SidebarBody from "./SidebarBody/SidebarBody";
import SidebarFooter from "./SidebarFooter/SidebarFooter";
import { sidebarItems } from "./Sidebar.shared";
import { SidebarItems } from "./Sidebar.interface";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const stateMachine = {
    group: sidebarItems as SidebarItems,
    activeSubmenu: null,
  };

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <S.StyledSidebar isCollapsed={isCollapsed}>
      <S.StyledCollapseButtonContainer isCollapsed={isCollapsed}>
        <IconButton
          icon='/ChevronLeft.svg'
          backgroundColor={theme.colors["--white"]}
          width='24px'
          height='24px'
          onClick={handleCollapse}
        />
      </S.StyledCollapseButtonContainer>
      <S.StyledSidebarBox isCollapsed={isCollapsed}>
        <SidebarTop stateMachine={stateMachine} />
        <SidebarBody stateMachine={stateMachine} />
        <SidebarFooter stateMachine={stateMachine} />
      </S.StyledSidebarBox>
    </S.StyledSidebar>
  );
};

export default Sidebar;
