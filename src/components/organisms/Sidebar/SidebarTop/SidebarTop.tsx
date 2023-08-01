import * as S from "./SidebarTop.styles";
import Text from "../../../atoms/Text/Text";
import { theme } from "../../../../themes/theme";
import { ReactSVG } from "react-svg";
import Avatar from "../../../atoms/Avatar/Avatar";
import { FC } from "react";
import { SidebarBodyProps } from "../Sidebar.interface";
import IconAtom from "../../../atoms/IconAtom/IconAtom";
import { sidebarItems } from "../Sidebar.shared";
import { MainProps } from "../../../templates/MainLayout/MainLayout.interface";

const SidebarTop: FC<MainProps & SidebarBodyProps> = ({
  stateMachine,
  setStateMachine,
  setActiveContent,
}) => {
  return (
    <S.StyledSidebarTop>
      {stateMachine.activeSubmenu ? (
        <S.StyledSubmenuContainer>
          <button
            type='button'
            onClick={() => {
              setStateMachine({
                ...stateMachine,
                activeSubmenu: null,
                group: sidebarItems,
              });
              setActiveContent(null);
            }}>
            <IconAtom icon='/ChevronLeft.svg' iconSize='14px' />
            <Text
              color={theme.colors["--orange600"]}
              size='0.875rem'
              weight='700'>
              Main Menu
            </Text>
          </button>
          <div>
            <IconAtom icon={`/${stateMachine.activeSubmenu.icon}.svg`} />
            <Text color={theme.colors["--white"]} size='1rem' weight='700'>
              {stateMachine.activeSubmenu.name}
            </Text>
          </div>
        </S.StyledSubmenuContainer>
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
