import IconButton from "../../molecules/IconButton/IconButton";
import { widgetBarBottomIcons, widgetBarTopIcons } from "./WidgetBar.shared";
import * as S from "./WidgetBar.styles";

const WidgetBar = () => {
  return (
    <S.StyledWidgetBar>
      <S.StyledWidgetBarTopContent>
        <S.StyledWidgetBarIconsContainer>
          {widgetBarTopIcons.map(
            (icon, index) =>
              index < 3 && <IconButton key={index} icon={`/${icon}.svg`} />
          )}
        </S.StyledWidgetBarIconsContainer>
        <S.StyledWidgetBarIconsContainer>
          {widgetBarTopIcons.map(
            (icon, index) =>
              index >= 3 &&
              index <= 5 && <IconButton key={index} icon={`/${icon}.svg`} />
          )}
        </S.StyledWidgetBarIconsContainer>
        <S.StyledWidgetBarIconsContainer>
          {widgetBarTopIcons.map(
            (icon, index) =>
              index === 6 && <IconButton key={index} icon={`/${icon}.svg`} />
          )}
        </S.StyledWidgetBarIconsContainer>
      </S.StyledWidgetBarTopContent>
      <S.StyledWidgetBarBottomContent>
        {widgetBarBottomIcons.map((icon, index) => (
          <IconButton key={index} icon={`/${icon}.svg`} />
        ))}
      </S.StyledWidgetBarBottomContent>
    </S.StyledWidgetBar>
  );
};

export default WidgetBar;
