import * as S from "./SidebarBody.styles";
import Text from "../../../atoms/Text/Text";
import { theme } from "../../../../themes/theme";
import SidebarItem from "../../../molecules/SidebarItem/SidebarItem";
import { FC } from "react";
import { SidebarBodyProps } from "../Sidebar.interface";
import { MainProps } from "../../../templates/MainLayout/MainLayout.interface";

const SidebarBody: FC<Partial<MainProps> & SidebarBodyProps> = ({
  stateMachine,
  setStateMachine,
  activeContent,
  setActiveContent,
}) => {
  console.log({
    activeContent,
  });
  return (
    <S.StyledSidebarBody>
      {stateMachine.group.body.map((item, index) => (
        <S.StyledSidebarBodyItemsBox key={index}>
          <S.StyledSidebarBodyItemsBoxTitleContainer>
            <Text
              color={theme.colors["--neutral300"]}
              size='0.75rem'
              weight='400'>
              {item.title}
            </Text>
          </S.StyledSidebarBodyItemsBoxTitleContainer>

          {item.items.map((nested) => (
            <SidebarItem
              selected={activeContent?.name === nested.name}
              icon={nested.icon ? `/${nested.icon}.svg` : undefined}
              color={theme.colors["--neutral300"]}
              size={theme.fontSizes["text-xs"]}
              weight='400'
              text={nested.name}
              onClick={() => {
                setActiveContent &&
                  setActiveContent({
                    name: nested?.name,
                    icon: `/${nested.icon}.svg` ?? "",
                  });
                {
                  console.log(nested.name, "name");
                }
                nested.body
                  ? setStateMachine({
                      ...stateMachine,
                      activeSubmenu: {
                        ...stateMachine.activeSubmenu,
                        name: nested.name,
                        icon: nested.icon,
                      },
                      group: {
                        ...stateMachine.group,
                        body: nested.body ? nested.body : [],
                        footer: nested.footer ? nested.footer : [],
                      },
                    })
                  : null;
              }}
            />
          ))}
        </S.StyledSidebarBodyItemsBox>
      ))}
    </S.StyledSidebarBody>
  );
};

export default SidebarBody;
