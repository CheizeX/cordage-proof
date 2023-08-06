import { FC, useState } from "react";
import * as S from "./MainContent.styles";
import { MainProps } from "../../templates/MainLayout/MainLayout.interface";
import IconAtom from "../../atoms/IconAtom/IconAtom";
import { theme } from "../../../themes/theme";
import IconButton from "../../molecules/IconButton/IconButton";
import Table from "./Table/Table";
import Cards from "./Cards/Cards";

const MainContent: FC<MainProps> = ({ activeContent, iscollapsed }) => {
  const [selected, setSelected] = useState<string>("list");
  const [search, setSearch] = useState<string>("");

  return (
    <S.StyledMainContentSection iscollapsed={iscollapsed}>
      {activeContent?.name === "Business Units" ? (
        <>
          <S.StyledHeader>
            <div>
              <IconAtom
                icon={activeContent?.icon}
                color={theme.colors["--orange600"]}
                iconsize={"28px"}
              />
              <h2>{activeContent?.name}</h2>
            </div>

            <button type='button' onClick={() => alert("Button clicked")}>
              New Business Unit
            </button>
          </S.StyledHeader>

          {/* Search and buttons */}
          <S.StyledSearchAndButtonsContainer>
            <S.StyledSearchContainer>
              <IconAtom
                icon='/MagnifyingGlass.svg'
                color={theme.colors["--neutral400"]}
                iconsize={"28px"}
              />
              <input
                type='text'
                placeholder='Search Business Units by name or keyword...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </S.StyledSearchContainer>

            <S.StyledButtonsContainer>
              <div>
                <IconButton
                  icon='/ListDashes.svg'
                  color={
                    selected === "list"
                      ? theme.colors["--orange600"]
                      : theme.colors["--neutral400"]
                  }
                  backgroundcolor={
                    selected === "list"
                      ? theme.colors["--orange200"]
                      : "transparent"
                  }
                  iconsize={"28px"}
                  onClick={() => setSelected("list")}
                />
                <IconButton
                  icon='/SquaresFour.svg'
                  color={
                    selected === "grid"
                      ? theme.colors["--orange600"]
                      : theme.colors["--neutral400"]
                  }
                  backgroundcolor={
                    selected === "grid"
                      ? theme.colors["--orange200"]
                      : "transparent"
                  }
                  iconsize={"28px"}
                  onClick={() => setSelected("grid")}
                />
              </div>
              <IconButton
                icon='/DotsThreeOutline.svg'
                color={theme.colors["--neutral400"]}
                iconsize={"28px"}
                onClick={() => alert("Sort button clicked")}
              />
            </S.StyledButtonsContainer>
          </S.StyledSearchAndButtonsContainer>
          {selected === "list" ? (
            <Table search={search} setSearch={setSearch} />
          ) : (
            <Cards search={search} />
          )}
          <S.StyledDisfuminator />
        </>
      ) : (
        <S.StyledCordageAnimation>
          <img
            src='/LogoCordage.svg'
            alt='Cordage animation'
            style={{ width: "100%" }}
          />
        </S.StyledCordageAnimation>
      )}
    </S.StyledMainContentSection>
  );
};

export default MainContent;
