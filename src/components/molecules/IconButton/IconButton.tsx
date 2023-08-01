import { FC } from "react";
import { IconButtonProps } from "./IconButton.interface";
import * as S from "./IconButton.styles";
import IconAtom from "../../atoms/IconAtom/IconAtom";

const IconButton: FC<IconButtonProps> = ({
  icon,
  iconSize,
  onClick,
  color,
  status,
  radius,
  height,
  width,
  backgroundColor,
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
      backgroundColor={backgroundColor}>
      <IconAtom icon={icon} color={color} iconSize={iconSize} />
      <S.StyledStatusIndicator status={status} />
    </S.StyledButton>
  );
};

export default IconButton;
