import { FC, useState } from "react";
import * as S from "./MainContent.styles";
import { MainProps } from "../../templates/MainLayout/MainLayout.interface";
import IconAtom from "../../atoms/IconAtom/IconAtom";
import { theme } from "../../../themes/theme";
import IconButton from "../../molecules/IconButton/IconButton";
import data from "../../../data/BU.json";
import Table from "./Table/Table";
import Cards from "./Cards/Cards";

const MainContent: FC<MainProps> = ({
  activeContent,
  // setActiveContent,
  iscollapsed,
  // setIsCollapsed,
}) => {
  console.log({ activeContent });
  console.log({ data });
  const [selected, setSelected] = useState<string>("list");
  const [search, setSearch] = useState<string>("");

  // funcion que me genere un color random en base a un numero que le pase
  const randomColor = (num: number) => {
    const twelvepastelColors = [
      "#FFB3BA",
      "#167116",
      "#FFDFBA",
      "#BAE1FF",
      "#c0b66c",
      "#FFBAF3",
      "#4f7758",
      "#896bb0",
      "#326784",
      "#FFC8BA",
      "#BAE1FF",
      "#D8BAFF",
    ];
    return twelvepastelColors[num];
  };

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
            <Table
              randomColor={randomColor}
              search={search}
              setSearch={setSearch}
            />
          ) : (
            <Cards randomColor={randomColor} search={search} />
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
