import { FC } from "react";
import IconAtom from "../../atoms/IconAtom/IconAtom";
import Text from "../../atoms/Text/Text";
import { StyledSidebarBodyItem } from "./SidebarItem.styles";

type SidebarItemProps = {
  icon?: string;
  text: string;
  color: string;
  weight: string;
  size: string;
};

const SidebarItem: FC<SidebarItemProps> = ({
  icon,
  text,
  color,
  weight,
  size,
}) => {
  return (
    <StyledSidebarBodyItem>
      {icon && <IconAtom icon={icon} />}
      <Text color={color} size={size} weight={weight}>
        {text}
      </Text>
    </StyledSidebarBodyItem>
  );
};

export default SidebarItem;
