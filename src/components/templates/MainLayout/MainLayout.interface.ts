import { Dispatch, SetStateAction } from "react";

export interface MainProps {
  activeContent: {
    name: string;
    icon: string;
  } | null;
  setActiveContent: Dispatch<
    SetStateAction<{
      name: string;
      icon: string;
    } | null>
  >;
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
}
