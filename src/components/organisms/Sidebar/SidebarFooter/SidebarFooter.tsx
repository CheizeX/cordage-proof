import { FC } from "react";
import { theme } from "../../../../themes/theme";
import SidebarItem from "../../../molecules/SidebarItem/SidebarItem";

import * as S from "./SidebarFooter.styles";
import { SidebarBodyProps } from "../Sidebar.interface";

const SidebarFooter: FC<SidebarBodyProps> = ({
  stateMachine,
  setStateMachine,
}) => {
  return (
    <S.StyledSidebarFooter>
      {stateMachine.group.footer.map((item) => (
        <SidebarItem
          notification={item.notification}
          selected={stateMachine.activeSubmenu?.name === item.name}
          icon={`/${item.icon}.svg`}
          color={theme.colors["--neutral300"]}
          size={theme.fontSizes["text-xs"]}
          weight='400'
          text={item.name}
          onClick={() => {
            item.body
              ? setStateMachine({
                  ...stateMachine,
                  activeSubmenu: {
                    ...stateMachine.activeSubmenu,
                    name: item.name,
                    icon: item.alterIcon ? item.alterIcon : item.icon,
                  },
                  group: {
                    ...stateMachine.group,
                    body: item.body ? item.body : [],
                    footer: item.footer ? item.footer : [],
                  },
                })
              : null;
          }}
        />
      ))}
    </S.StyledSidebarFooter>
  );
};

export default SidebarFooter;
