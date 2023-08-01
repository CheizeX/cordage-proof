import { FC } from "react";
import * as S from "./MainContent.styles";
import { MainProps } from "../../templates/MainLayout/MainLayout.interface";

const MainContent: FC<MainProps> = ({
  activeContent,
  setActiveContent,
  isCollapsed,
  setIsCollapsed,
}) => {
  return (
    <S.StyledMainContentSection isCollapsed={isCollapsed}>
      Here goes MainContent
    </S.StyledMainContentSection>
  );
};

export default MainContent;
