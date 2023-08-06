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
  iscollapsed,
  setIsCollapsed,
}) => {
  const [stateMachine, setStateMachine] = useState<StateMachineProps>({
    group: sidebarItems as SidebarItems,
    activeSubmenu: null,
  });

  const handleCollapse = () => {
    setIsCollapsed(!iscollapsed);
  };

  return (
    <S.StyledSidebar iscollapsed={iscollapsed}>
      <S.StyledCollapseButtonContainer iscollapsed={iscollapsed}>
        <IconButton
          icon='/ChevronLeft.svg'
          backgroundcolor={theme.colors["--white"]}
          width='24px'
          height='24px'
          iconsize='10px'
          onClick={handleCollapse}
        />
      </S.StyledCollapseButtonContainer>
      <S.StyledSidebarBox iscollapsed={iscollapsed}>
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
