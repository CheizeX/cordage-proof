import * as S from "./SidebarTop.styles";
import Text from "../../../atoms/Text/Text";
import { theme } from "../../../../themes/theme";
import { ReactSVG } from "react-svg";
import Avatar from "../../../atoms/Avatar/Avatar";
import { FC } from "react";
import { SidebarBodyProps } from "../Sidebar.interface";

const SidebarTop: FC<SidebarBodyProps> = ({ stateMachine }) => {
  return (
    <S.StyledSidebarTop>
      {stateMachine.activeSubmenu ? (
        <div>ACTIVE SUBMENU</div>
      ) : (
        <S.StyledOrganizationInfoContainer>
          <Avatar text='A' backgroundColor={theme.colors["--orange600"]} />
          <S.StyledOrganizationInfo>
            <Text color={theme.colors["--white"]} weight='700'>
              Fedex Corporation
            </Text>
            <span>
              <Text
                size='0.875rem'
                color={theme.colors["--neutral400"]}
                weight='500'>
                Head Quarters
              </Text>
              <ReactSVG src='/ChevronLeft.svg' />
            </span>
          </S.StyledOrganizationInfo>
        </S.StyledOrganizationInfoContainer>
      )}
    </S.StyledSidebarTop>
  );
};

export default SidebarTop;
