import { Dispatch, SetStateAction } from "react";

export interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed?: Dispatch<SetStateAction<boolean>>;
}
