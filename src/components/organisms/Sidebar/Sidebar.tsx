import { useState } from "react";
import { theme } from "../../../themes/theme";
import IconButton from "../../molecules/IconButton/IconButton";
import * as S from "./Sidebar.styles";
import SidebarTop from "./SidebarTop/SidebarTop";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

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
        <SidebarTop />
      </S.StyledSidebarBox>
    </S.StyledSidebar>
  );
};

export default Sidebar;
