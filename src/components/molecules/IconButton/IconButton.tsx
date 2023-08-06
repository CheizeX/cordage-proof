import { FC } from "react";
import { IconButtonProps } from "./IconButton.interface";
import * as S from "./IconButton.styles";
import IconAtom from "../../atoms/IconAtom/IconAtom";

const IconButton: FC<IconButtonProps> = ({
  icon,
  iconsize,
  onClick,
  color,
  state,
  radius,
  height,
  width,
  backgroundcolor,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      alert("No onClick handler provided");
    }
  };

  return (
    <S.StyledButton
      onClick={handleClick}
      radius={radius}
      height={height}
      width={width}
      backgroundcolor={backgroundcolor}>
      <IconAtom icon={icon} color={color} iconsize={iconsize} />
      <S.StyledStatusIndicator state={state} />
    </S.StyledButton>
  );
};

export default IconButton;
