import { FC, useMemo, useState, useCallback, useEffect } from "react";
import { theme } from "../../../../themes/theme";
import Avatar from "../../../atoms/Avatar/Avatar";
import IconAtom from "../../../atoms/IconAtom/IconAtom";
import IconButton from "../../../molecules/IconButton/IconButton";
import data from "../../../../data/BU.json";
import * as S from "./Table.styles";

const Table: FC<any> = ({ search, setSearch }) => {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [selectingItemsPerPage, setSelectingItemsPerPage] = useState(false);

  const totalPages = useMemo(
    () => Math.ceil(data.length / itemsPerPage),
    [itemsPerPage]
  );

  const [filteredData, setFilteredData] = useState(data);

  const filterData = useCallback(() => {
    const filtered = data.filter((item) => {
      return (
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.responsible.first_name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.responsible.last_name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.responsible.email.toLowerCase().includes(search.toLowerCase()) ||
        item.code.toLowerCase().includes(search.toLowerCase()) ||
        item.address.country.toLowerCase().includes(search.toLowerCase()) ||
        item.address.location.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [search]);

  useEffect(() => {
    filterData();
  }, [filterData]);

  const currentPageData = useMemo(() => {
    return filteredData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [currentPage, itemsPerPage, filteredData]);

  return (
    <S.StyledTableContainer>
      <S.StyledGrid>
        <S.StyledHeaderCell>Business Unit</S.StyledHeaderCell>
        <S.StyledHeaderCell>Responsible User</S.StyledHeaderCell>
        <S.StyledHeaderCell>Code</S.StyledHeaderCell>
        <S.StyledHeaderCell>Country</S.StyledHeaderCell>
        <S.StyledHeaderCell>City</S.StyledHeaderCell>
        <S.StyledHeaderCell>Time Zone</S.StyledHeaderCell>
      </S.StyledGrid>

      {currentPageData.map((item, i) => (
        <S.StyledRowGrid key={i}>
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
              star={item.description === "Principal Plant" ? true : false}
              text={item.description}
              backgroundcolor={item.colors_theme}
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
              backgroundcolor={item.colors_theme}
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
            <S.StyledCellContent size='14px'>{item.code}</S.StyledCellContent>
          </S.StyledCell>
          <S.StyledCell>
            <S.StyledCellContent size='14px'>
              {item.address.country === "MX" ? "Mexico" : item.address.country}
            </S.StyledCellContent>
          </S.StyledCell>
          <S.StyledCell>
            <S.StyledCellContent size='14px'>
              {item.address.location === "QRO" ? "CDMX" : item.address.location}
            </S.StyledCellContent>
          </S.StyledCell>
          <S.StyledCell>
            <S.StyledCellContent>CDT, UTC -5</S.StyledCellContent>
            <S.StyledCellContent color={theme.colors["--gray500"]}>
              México, CDMX
            </S.StyledCellContent>
          </S.StyledCell>
        </S.StyledRowGrid>
      ))}

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
              <IconAtom
                icon='/WbCaretRight.svg'
                iconsize={"16px"}
                color={theme.colors["--neutral500"]}
              />
            </div>
          </S.StyledItemsPerPageButton>
          {selectingItemsPerPage && (
            <S.StyledItemsPerPageDropdown>
              <S.StyledItemsPerPageDropdownButton
                active={Number(itemsPerPage) === 3 ? true : false}
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
              iconsize={"14px"}
              onClick={() => {
                setSearch("");
                currentPage > 1 && setCurrentPage(currentPage - 1);
              }}
            />
          </div>
          <span>
            {Array.from(Array(totalPages), (_, i) => {
              return (
                <S.StyledPageNumber
                  key={i}
                  isselected={currentPage === i + 1}
                  onClick={() => {
                    setSearch("");
                    setCurrentPage(i + 1);
                  }}>
                  {i + 1}
                </S.StyledPageNumber>
              );
            })}
          </span>

          <IconButton
            icon='/WbCaretRight.svg'
            iconsize={"14px"}
            onClick={() => {
              setSearch("");
              currentPage < totalPages && setCurrentPage(currentPage + 1);
            }}
          />
        </S.StyledNextAndPreviousButtonContainer>
      </S.StyledPaginationContainer>
    </S.StyledTableContainer>
  );
};

export default Table;
