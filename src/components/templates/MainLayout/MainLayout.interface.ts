import { Dispatch, SetStateAction } from "react";

export interface MainProps {
  activeContent: {
    name: string;
    icon: string;
  };
  setActiveContent: Dispatch<
    SetStateAction<{
      name: string;
      icon: string;
    }>
  >;
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
}
