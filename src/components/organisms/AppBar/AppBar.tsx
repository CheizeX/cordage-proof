import * as S from "./AppBar.styles";
import IconButton from "../../molecules/IconButton/IconButton";
import { navbarItems } from "./AppBar.shared";
import Avatar from "../../atoms/Avatar/Avatar";

const AppBar = () => {
  return (
    <S.StyledAppBar>
      <S.StyledAppBarLeftSide>
        <IconButton icon='/DotsNine.svg' />
        <img src='/LogoCordage.svg' alt='Logo appbar' />
      </S.StyledAppBarLeftSide>

      <S.StyledAppBarRightSide>
        <S.StyledNavbar>
          {navbarItems.map((item) => (
            <IconButton
              icon={`${item.name}.svg`}
              key={item.name}
              status={item.status}
            />
          ))}
        </S.StyledNavbar>
        <Avatar image='/images/Avatar.png' alt='user avatar' size={40} />
      </S.StyledAppBarRightSide>
    </S.StyledAppBar>
  );
};

export default AppBar;
