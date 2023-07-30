import * as S from "./SidebarTop.styles";
import Text from "../../../atoms/Text/Text";
import { theme } from "../../../../themes/theme";

const SidebarTop = () => {
  return (
    <S.StyledSidebarTop>
      <div>
        <div>A</div>
        <div>
          <Text
            color={theme.colors["--white"]}
            size={theme.fontSizes["text-xs"]}
            weight='700'>
            Fedex Corporation
          </Text>
        </div>
      </div>
    </S.StyledSidebarTop>
  );
};

export default SidebarTop;
