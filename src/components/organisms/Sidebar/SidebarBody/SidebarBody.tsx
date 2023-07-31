import * as S from "./SidebarBody.styles";
import Text from "../../../atoms/Text/Text";
import { theme } from "../../../../themes/theme";
import SidebarItem from "../../../molecules/SidebarItem/SidebarItem";
import { FC } from "react";
import { SidebarBodyProps } from "../Sidebar.interface";

const SidebarBody: FC<SidebarBodyProps> = ({ stateMachine }) => {
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
              icon={nested.icon ? `/${nested.icon}.svg` : undefined}
              color={theme.colors["--neutral300"]}
              size={theme.fontSizes["text-xs"]}
              weight='400'
              text={nested.name}
            />
          ))}
        </S.StyledSidebarBodyItemsBox>
      ))}
    </S.StyledSidebarBody>
  );
};

export default SidebarBody;
