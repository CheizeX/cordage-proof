import { Dispatch, SetStateAction } from "react";

export interface MainProps {
  activeContent: string | null;
  setActiveContent: Dispatch<SetStateAction<string | null>>;
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
}
