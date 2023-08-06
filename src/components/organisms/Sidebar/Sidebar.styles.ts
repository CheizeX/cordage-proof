import styled from "styled-components";
import { SidebarProps } from "./Sidebar.interface";

export const StyledSidebar = styled.aside<SidebarProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 256px;
  max-width: 256px;
  height: 100%;
  min-height: calc(100vh - 60px);
  background: ${(props) => props.theme.colors["--neutral900"]};
  transition: 0.3s;
  transform: ${(props) =>
    props.iscollapsed === true ? "translateX(-232px)" : "translateX(0px)"};
  z-index: 1;
`;

export const StyledSidebarBox = styled.div<SidebarProps>`
  width: 100%;
  min-height: 100%;
  flex-direction: column;
  opacity: ${(props) => (props.iscollapsed === true ? "0" : "1")};
  transition: 0.1s;
`;

export const StyledCollapseButtonContainer = styled.div<SidebarProps>`
  position: absolute;
  right: -12px;
  top: 24px;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
    0px 2px 4px -2px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  transition: 0.6s;
  transform: ${(props) =>
    props.iscollapsed === true ? "rotate(180deg)" : "rotate(0deg)"};
  transition: 0.3s;
  z-index: 1;
`;
