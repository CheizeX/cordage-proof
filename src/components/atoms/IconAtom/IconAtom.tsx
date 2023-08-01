import { FC } from "react";
import { StyledIcon } from "./IconAtom.styles";

const IconAtom: FC<{
  icon?: string;
  color?: string;
  iconSize?: string;
}> = ({ icon, color, iconSize }) => {
  if (!icon) {
    return null;
  }

  return <StyledIcon src={icon} color={color} iconSize={iconSize} />;
};

export default IconAtom;
