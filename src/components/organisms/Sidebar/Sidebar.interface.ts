import { Dispatch, SetStateAction } from "react";

export interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed?: Dispatch<SetStateAction<boolean>>;
}

interface SidebarItem {
  name: string;
  icon?: string;
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

export interface SidebarBodyProps {
  stateMachine: {
    group: SidebarItems;
    activeSubmenu: null | string;
  };
}
