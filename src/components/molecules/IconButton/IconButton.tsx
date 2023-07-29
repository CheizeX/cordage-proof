import { FC } from "react";
import { IconButtonProps } from "./IconButton.interface";
import * as S from "./IconButton.styles";

const IconButton: FC<IconButtonProps> = ({ icon, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      alert("No onClick handler provided");
    }
  };

  return (
    <S.StyledButton onClick={handleClick}>
      <S.StyledIcon src={icon} alt='' />
    </S.StyledButton>
  );
};

export default IconButton;
