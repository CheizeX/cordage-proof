import { FC, useState } from "react";
import AppBar from "../../organisms/AppBar/AppBar";
import * as S from "./MainLayout.styles";
import Sidebar from "../../organisms/Sidebar/Sidebar";
import MainContent from "../../organisms/MainContent/MainContent";
import WidgetBar from "../../organisms/WidgetBar/WidgetBar";

const MainLayout: FC = () => {
  const [activeContent, setActiveContent] = useState<string | null>(null);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <S.StyledMainLayout>
      <AppBar />
      <S.StyledMainContentContainer>
        <Sidebar
          activeContent={activeContent}
          setActiveContent={setActiveContent}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />

        <MainContent
          activeContent={activeContent}
          setActiveContent={setActiveContent}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />

        <WidgetBar />
      </S.StyledMainContentContainer>
    </S.StyledMainLayout>
  );
};

export default MainLayout;
