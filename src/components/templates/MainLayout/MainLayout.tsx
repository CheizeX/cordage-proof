import { FC } from "react";
import AppBar from "../../organisms/AppBar/AppBar";
import * as S from "./MainLayout.styles";
import Sidebar from "../../organisms/Sidebar/Sidebar";

const MainLayout: FC = () => {
  return (
    <S.StyledMainLayout>
      <AppBar />
      <S.StyledMainContentContainer>
        <Sidebar />
      </S.StyledMainContentContainer>
    </S.StyledMainLayout>
  );
};

export default MainLayout;
