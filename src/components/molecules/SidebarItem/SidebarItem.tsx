import { FC } from "react";
import IconAtom from "../../atoms/IconAtom/IconAtom";
import Text from "../../atoms/Text/Text";
import { StyledSidebarBodyItem } from "./SidebarItem.styles";
import { theme } from "../../../themes/theme";

type SidebarItemProps = {
  icon?: string;
  text: string;
  color: string;
  weight: string;
  size: string;
  selected: boolean;
  notification?: boolean;
  onClick?: () => void;
};

const SidebarItem: FC<SidebarItemProps> = ({
  icon,
  text,
  color,
  weight,
  size,
  onClick,
  selected,
  notification,
}) => {
  return (
    <StyledSidebarBodyItem type='button' onClick={onClick} selected={selected}>
      {icon && (
        <IconAtom
          icon={icon}
          color={selected ? theme.colors["--orange600"] : ""}
        />
      )}
      <Text color={color} size={size} weight={weight}>
        {text}
      </Text>
      {notification ? <span /> : null}
    </StyledSidebarBodyItem>
  );
};

export default SidebarItem;
