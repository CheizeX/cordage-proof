import { Dispatch, SetStateAction } from "react";

export interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed?: Dispatch<SetStateAction<boolean>>;
}

interface SidebarItem {
  name: string;
  icon?: string;
  alterIcon?: string;
  body?: SidebarSection[];
  footer?: SidebarItem[];
  notification?: boolean;
}

interface SidebarBodyItem extends SidebarItem {
  body?: SidebarSection[];
  footer?: SidebarItem[];
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

export interface SidebarItems {
  body: Array<{
    title: string;
    items: SidebarBodyItem[];
  }>;
  footer: SidebarItem[];
}

export type StateMachineProps = {
  group: SidebarItems;
  activeSubmenu: null | {
    name: string;
    icon?: string;
  };
};
export interface SidebarBodyProps {
  stateMachine: StateMachineProps;
  setStateMachine: Dispatch<SetStateAction<StateMachineProps>>;
}
