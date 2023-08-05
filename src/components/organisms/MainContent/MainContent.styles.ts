import styled from "styled-components";

export const StyledMainContentSection = styled.section<{
  isCollapsed: boolean;
}>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin-left: ${(props) => (!props.isCollapsed ? "0" : "-232px")};
  padding: 28px 24px;
  transition: 0.3s ease-in-out;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${(props) => props.theme.colors["--neutral200"]};
  & > div {
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${(props) => props.theme.colors["--neutral800"]};
    max-height: 32px;
    & > :first-child {
      height: 44px;
      width: 44px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.colors["--orange100"]};
    }
    & > h4 {
      font-size: ${(props) => props.theme.fontSizes["h4"]};
      padding: 0;
      margin: 0;
    }
  }

  & > button {
    width: 140px;
    height: 40px;
    background: ${(props) => props.theme.colors["--teal600"]};
    color: ${(props) => props.theme.colors["--white"]};
    font-size: 14px;
    font-weight: 600;
    border-radius: 4px;
    &:hover {
      transition: 0.3s ease-in-out;
      opacity: 0.9;
    }
    &:active {
      transition: 0.3s ease-in-out;
      opacity: 1;
    }
  }
`;

// -----------------------SEARCH AND BUTTONS---------------------------
export const StyledSearchAndButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const StyledSearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 420px;
  min-height: 40px;
  gap: 8px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors["--neutral300"]};
  border-radius: 4px;
  & > svg {
    color: ${(props) => props.theme.colors["--neutral400"]};
  }
  & > input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    &::placeholder {
      color: ${(props) => props.theme.colors["--neutral400"]};
    }
  }
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 160px;
  height: 100%;
  & > div {
    display: flex;
    gap: 8px;
  }
  & button {
    transition: 0.2s ease-in-out;
    &:hover {
      transition: 0.2s ease-in-out;
      opacity: 0.8;
    }
  }
`;

//-----------------------TABLE---------------------------
export const StyledTableContainer = styled.div`
  width: 100%;
  height: fit-content;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const StyledGrid = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  grid-template-columns:
    minmax(242px, 1fr) minmax(257px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr)
    minmax(100px, 1fr) minmax(100px, 1fr);
  grid-auto-rows: 48px;
`;
export const StyledRowGrid = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  grid-template-columns:
    minmax(242px, 1fr) minmax(257px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr)
    minmax(100px, 1fr) minmax(100px, 1fr);
  grid-auto-rows: 70px;
`;

export const StyledHeaderCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 48px;
  padding: 0 16px;
  text-align: left;
  white-space: nowrap;
  border-bottom: 1px solid ${(props) => props.theme.colors["--neutral100"]};
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const StyledCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 4px;
  padding: 0 16px;
  text-align: left;
  min-height: 70px;
  min-width: 0;
`;

export const StyledCellContent = styled.div<{
  size?: string;
  weight?: string;
  color?: string;
}>`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  font-size: ${({ size }) => size ?? "12px"};
  font-weight: ${({ weight }) => weight ?? "400"};
  color: ${({ color }) => color ?? "inherit"};
`;

// Pagination

export const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-left: 24px;
  border-top: 1px solid ${(props) => props.theme.colors["--neutral100"]};
  & > :first-child {
    display: flex;
    gap: 8px;
    position: relative;
  }
`;

export const StyledItemsPerPageButton = styled.button<{
  isSelected?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  width: 50px;
  height: 100%;
  border: 1px solid
    ${(props) =>
      props.isSelected
        ? props.theme.colors["--neutral100"]
        : props.theme.colors["--neutral300"]};
  border-radius: 4px;
  background: none;
`;

export const StyledNextAndPreviousButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledPageNumber = styled.button<{
  isSelected?: boolean;
}>`
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  background-color: ${(props) =>
    props.isSelected
      ? props.theme.colors["--neutral100"]
      : props.theme.colors["--white"]};

  font-size: 14px;
  font-weight: 400;
  &:hover {
    transition: 0.3s ease-in-out;
    opacity: 0.9;
  }
`;

export const StyledItemsPerPageDropdown = styled.div`
  position: absolute;
  bottom: 28px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  width: 50px;
  height: fit-content;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors["--white"]};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const StyledItemsPerPageDropdownButton = styled.button<{
  active: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 32px;
  border: none;
  border-radius: 4px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors["--neutral100"] : theme.colors["--white"]};
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  &:hover {
    background: ${(props) => props.theme.colors["--neutral100"]};
    transition: 0.3s ease-in-out;
    opacity: 0.9;
  }
`;
