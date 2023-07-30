import styled from "styled-components";
import { SidebarProps } from "./Sidebar.interface";

export const StyledSidebar = styled.aside<SidebarProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => (props.isCollapsed ? "24px" : "256px")};
  height: 100%;
  background: ${(props) => props.theme.colors["--neutral900"]};
  transition: 0.3s;
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
    props.isCollapsed ? "rotate(180deg)" : "rotate(0deg)"};
`;
