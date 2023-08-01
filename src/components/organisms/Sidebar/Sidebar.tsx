import { FC, useState } from "react";
import { theme } from "../../../themes/theme";
import IconButton from "../../molecules/IconButton/IconButton";
import * as S from "./Sidebar.styles";
import SidebarTop from "./SidebarTop/SidebarTop";
import SidebarBody from "./SidebarBody/SidebarBody";
import SidebarFooter from "./SidebarFooter/SidebarFooter";
import { sidebarItems } from "./Sidebar.shared";
import { SidebarItems, StateMachineProps } from "./Sidebar.interface";
import { MainProps } from "../../templates/MainLayout/MainLayout.interface";

const Sidebar: FC<MainProps> = ({
  activeContent,
  setActiveContent,
  isCollapsed,
  setIsCollapsed,
}) => {
  const [stateMachine, setStateMachine] = useState<StateMachineProps>({
    group: sidebarItems as SidebarItems,
    activeSubmenu: null,
  });
  console.log({
    stateMachine,
  });
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
          iconSize='10px'
          onClick={handleCollapse}
        />
      </S.StyledCollapseButtonContainer>
      <S.StyledSidebarBox isCollapsed={isCollapsed}>
        <SidebarTop
          stateMachine={stateMachine}
          setStateMachine={setStateMachine}
          setActiveContent={setActiveContent}
          activeContent={activeContent}
        />
        <SidebarBody
          stateMachine={stateMachine}
          setStateMachine={setStateMachine}
          activeContent={activeContent}
          setActiveContent={setActiveContent}
        />
        <SidebarFooter
          stateMachine={stateMachine}
          setStateMachine={setStateMachine}
        />
      </S.StyledSidebarBox>
    </S.StyledSidebar>
  );
};

export default Sidebar;
