import { FC } from "react";
import { theme } from "../../../../themes/theme";
import SidebarItem from "../../../molecules/SidebarItem/SidebarItem";

import * as S from "./SidebarFooter.styles";
import { SidebarBodyProps } from "../Sidebar.interface";

const SidebarFooter: FC<SidebarBodyProps> = ({ stateMachine }) => {
  return (
    <S.StyledSidebarFooter>
      {stateMachine.group.footer.map((item) => (
        <SidebarItem
          icon={`/${item.icon}.svg`}
          color={theme.colors["--neutral300"]}
          size={theme.fontSizes["text-xs"]}
          weight='400'
          text={item.name}
        />
      ))}
    </S.StyledSidebarFooter>
  );
};

export default SidebarFooter;
