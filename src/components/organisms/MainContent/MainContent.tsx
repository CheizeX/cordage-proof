import { FC, Fragment, useMemo, useState } from "react";
import * as S from "./MainContent.styles";
import { MainProps } from "../../templates/MainLayout/MainLayout.interface";
import IconAtom from "../../atoms/IconAtom/IconAtom";
import { theme } from "../../../themes/theme";
import IconButton from "../../molecules/IconButton/IconButton";
import data from "../../../data/BU.json";
import Avatar from "../../atoms/Avatar/Avatar";

const MainContent: FC<MainProps> = ({
  activeContent,
  // setActiveContent,
  isCollapsed,
  // setIsCollapsed,
}) => {
  console.log({ activeContent });
  console.log({ data });
  const [selected, setSelected] = useState<string>("list");
  const [search, setSearch] = useState<string>("");

  // Pagination state and constants
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [selectingItemsPerPage, setSelectingItemsPerPage] = useState(false);

  const totalPages = useMemo(
    () => Math.ceil(data.length / itemsPerPage),
    [itemsPerPage]
  );
  const currentPageData = useMemo(
    () =>
      //  filtrar segun el search
      search
        ? data
            .filter((item) => {
              return (
                item.description.toLowerCase().includes(search.toLowerCase()) ||
                item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.responsible.first_name
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                item.responsible.last_name
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                item.responsible.email
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                item.code.toLowerCase().includes(search.toLowerCase()) ||
                item.address.country
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                item.address.location
                  .toLowerCase()
                  .includes(search.toLowerCase())
              );
            })
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        : data.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
          ),
    [currentPage, itemsPerPage, search]
  );

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
    <S.StyledMainContentSection isCollapsed={isCollapsed}>
      {activeContent?.name === "Business Units" ? (
        <>
          <S.StyledHeader>
            <div>
              <IconAtom
                icon={activeContent?.icon}
                color={theme.colors["--orange600"]}
                iconSize={"28px"}
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
                iconSize={"28px"}
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
                  backgroundColor={
                    selected === "list"
                      ? theme.colors["--orange200"]
                      : "transparent"
                  }
                  iconSize={"28px"}
                  onClick={() => setSelected("list")}
                />
                <IconButton
                  icon='/SquaresFour.svg'
                  color={
                    selected === "grid"
                      ? theme.colors["--orange600"]
                      : theme.colors["--neutral400"]
                  }
                  backgroundColor={
                    selected === "grid"
                      ? theme.colors["--orange200"]
                      : "transparent"
                  }
                  iconSize={"28px"}
                  onClick={() => setSelected("grid")}
                />
              </div>
              <IconButton
                icon='/DotsThreeOutline.svg'
                color={theme.colors["--neutral400"]}
                iconSize={"28px"}
                onClick={() => alert("Sort button clicked")}
              />
            </S.StyledButtonsContainer>
          </S.StyledSearchAndButtonsContainer>
        </>
      ) : null}

      {/* Table */}
      <S.StyledTableContainer>
        {/* header */}
        <S.StyledGrid>
          <S.StyledHeaderCell>Business Unit</S.StyledHeaderCell>
          <S.StyledHeaderCell>Responsible User</S.StyledHeaderCell>
          <S.StyledHeaderCell>Code</S.StyledHeaderCell>
          <S.StyledHeaderCell>Country</S.StyledHeaderCell>
          <S.StyledHeaderCell>City</S.StyledHeaderCell>
          <S.StyledHeaderCell>Time Zone</S.StyledHeaderCell>
        </S.StyledGrid>

        <S.StyledRowGrid>
          {currentPageData.map((item, i) => (
            <Fragment key={i}>
              <S.StyledCell
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  minWidth: "fit-content",
                  gap: "8px",
                }}>
                <Avatar
                  text={item.description}
                  backgroundColor={randomColor(i)}
                />
                <div>
                  <S.StyledCellContent size='12px' weight='600'>
                    {item.description}
                  </S.StyledCellContent>
                  <S.StyledCellContent color={theme.colors["--neutral500"]}>
                    {item.name}
                  </S.StyledCellContent>
                </div>
              </S.StyledCell>
              <S.StyledCell
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  minWidth: "fit-content",
                  gap: "12px",
                }}>
                <Avatar
                  text={`${item.responsible.first_name} {' '} ${item.responsible.last_name}`}
                  backgroundColor={randomColor(i)}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "center",
                    minWidth: "fit-content",
                  }}>
                  <S.StyledCellContent size='14px'>
                    {item.responsible.first_name} {item.responsible.last_name}
                  </S.StyledCellContent>
                  <S.StyledCellContent color={theme.colors["--gray500"]}>
                    {item.responsible.email}
                  </S.StyledCellContent>
                </div>
              </S.StyledCell>
              <S.StyledCell>
                <S.StyledCellContent size='14px'>
                  {item.code}
                </S.StyledCellContent>
              </S.StyledCell>
              <S.StyledCell>
                <S.StyledCellContent size='14px'>
                  {item.address.country === "MX"
                    ? "Mexico"
                    : item.address.country}
                </S.StyledCellContent>
              </S.StyledCell>
              <S.StyledCell>
                <S.StyledCellContent size='14px'>
                  {item.address.location === "QRO"
                    ? "CDMX"
                    : item.address.location}
                </S.StyledCellContent>
              </S.StyledCell>
              <S.StyledCell>
                <S.StyledCellContent>CDT, UTC -5</S.StyledCellContent>
                <S.StyledCellContent color={theme.colors["--gray500"]}>
                  México, CDMX
                </S.StyledCellContent>
              </S.StyledCell>
            </Fragment>
          ))}
        </S.StyledRowGrid>

        {/* pagination */}
        <S.StyledPaginationContainer>
          <div>
            Rows per page
            <S.StyledItemsPerPageButton
              type='button'
              onClick={() => setSelectingItemsPerPage(!selectingItemsPerPage)}>
              {itemsPerPage}
              <div
                style={{
                  transform: "rotate(90deg)",
                }}>
                <IconAtom icon='/WbCaretRight.svg' iconSize={"14px"} />
              </div>
            </S.StyledItemsPerPageButton>
            {selectingItemsPerPage && (
              <S.StyledItemsPerPageDropdown>
                <S.StyledItemsPerPageDropdownButton
                  active={Number(itemsPerPage) === 3}
                  type='button'
                  onClick={() => {
                    setItemsPerPage(3);
                    setCurrentPage(1);
                    setSelectingItemsPerPage(false);
                  }}>
                  3
                </S.StyledItemsPerPageDropdownButton>
                <S.StyledItemsPerPageDropdownButton
                  active={Number(itemsPerPage) === 5}
                  type='button'
                  onClick={() => {
                    setItemsPerPage(5);
                    setCurrentPage(1);
                    setSelectingItemsPerPage(false);
                  }}>
                  5
                </S.StyledItemsPerPageDropdownButton>
                <S.StyledItemsPerPageDropdownButton
                  active={Number(itemsPerPage) === 7}
                  type='button'
                  onClick={() => {
                    setItemsPerPage(7);
                    setCurrentPage(1);
                    setSelectingItemsPerPage(false);
                  }}>
                  7
                </S.StyledItemsPerPageDropdownButton>
              </S.StyledItemsPerPageDropdown>
            )}
          </div>
          <div>
            Showing {currentPageData.length} of {data.length} Results
          </div>
          <S.StyledNextAndPreviousButtonContainer>
            <div
              style={{
                transform: "rotate(180deg)",
              }}>
              <IconButton
                icon='/WbCaretRight.svg'
                iconSize={"14px"}
                onClick={() => {
                  currentPage > 1 && setCurrentPage(currentPage - 1);
                }}
              />
            </div>
            <span>
              {Array.from(Array(totalPages), (_, i) => {
                return (
                  <S.StyledPageNumber
                    key={i}
                    isSelected={currentPage === i + 1}
                    onClick={() => {
                      setCurrentPage(i + 1);
                    }}>
                    {i + 1}
                  </S.StyledPageNumber>
                );
              })}
            </span>

            <IconButton
              icon='/WbCaretRight.svg'
              iconSize={"14px"}
              onClick={() => {
                currentPage < totalPages && setCurrentPage(currentPage + 1);
              }}
            />
          </S.StyledNextAndPreviousButtonContainer>
        </S.StyledPaginationContainer>
      </S.StyledTableContainer>
    </S.StyledMainContentSection>
  );
};

export default MainContent;
