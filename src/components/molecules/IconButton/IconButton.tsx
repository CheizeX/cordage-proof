import { FC } from "react";
import { IconButtonProps } from "./IconButton.interface";
import * as S from "./IconButton.styles";

const IconButton: FC<IconButtonProps> = ({ icon, onClick, color, status }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      alert("No onClick handler provided");
    }
  };

  return (
    <S.StyledButton onClick={handleClick}>
      <S.StyledIcon src={icon} color={color} />
      <S.StyledStatusIndicator status={status} />
    </S.StyledButton>
  );
};

export default IconButton;
