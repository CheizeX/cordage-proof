import styled from "styled-components";

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
export const StyledRowGrid = styled.button`
  display: grid;
  align-items: center;
  width: 100%;
  grid-template-columns:
    minmax(242px, 1fr) minmax(257px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr)
    minmax(100px, 1fr) minmax(100px, 1fr);
  grid-auto-rows: 70px;
  background: none;
  &:hover {
    transition: 0.2s ease-in-out;
    background: ${(props) => props.theme.colors["--neutral100"]};
  }
  &:active {
    background: none;
  }
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
  color: ${({ theme }) => theme.colors["--neutral600"]};
  & > :first-child {
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
  }
`;

export const StyledItemsPerPageButton = styled.button<{
  isselected?: boolean;
}>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 8px;
  width: 50px;
  height: 36px;
  border: 1px solid
    ${(props) =>
      props.isselected
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
  isselected?: boolean;
}>`
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  background-color: ${(props) =>
    props.isselected
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
  bottom: 38px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
  background-color: ${({ active, theme }) =>
    active ? theme.colors["--neutral100"] : theme.colors["--white"]};
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: ${({ theme }) => theme.colors["--neutral800"]};
  &:hover {
    background: ${(props) => props.theme.colors["--neutral200"]};
    transition: 0.3s ease-in-out;
    opacity: 0.9;
  }
`;
