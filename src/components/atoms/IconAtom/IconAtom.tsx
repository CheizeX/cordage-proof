import { FC } from "react";
import { StyledIcon } from "./IconAtom.styles";

const IconAtom: FC<{
  icon?: string;
  color?: string;
  iconsize?: string;
}> = ({ icon, color, iconsize }) => {
  if (!icon) {
    return null;
  }

  return <StyledIcon src={icon} color={color} iconsize={iconsize} />;
};

export default IconAtom;
