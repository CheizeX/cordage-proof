import { FC, useState } from "react";
import AppBar from "../../organisms/AppBar/AppBar";
import * as S from "./MainLayout.styles";
import Sidebar from "../../organisms/Sidebar/Sidebar";

const MainLayout: FC = () => {
  const [activeContent, setActiveContent] = useState<string | null>(null);

  return (
    <S.StyledMainLayout>
      <AppBar />
      <S.StyledMainContentContainer>
        <Sidebar
          activeContent={activeContent}
          setActiveContent={setActiveContent}
        />
      </S.StyledMainContentContainer>
    </S.StyledMainLayout>
  );
};

export default MainLayout;
