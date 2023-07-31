import { FC } from "react";
import { StyledIcon } from "./IconAtom.styles";

const IconAtom: FC<{
  icon?: string;
  color?: string;
}> = ({ icon, color }) => {
  if (!icon) {
    return null;
  }

  return <StyledIcon src={icon} color={color} />;
};

export default IconAtom;
