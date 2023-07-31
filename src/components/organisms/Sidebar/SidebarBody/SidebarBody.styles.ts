import styled from "styled-components";

export const StyledSidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: calc(100% - 188px);
  padding: 16px 0px;
  border-bottom: 1px solid ${(props) => props.theme.colors["--neutral700"]};
  border-top: 1px solid ${(props) => props.theme.colors["--neutral700"]};
`;

export const StyledSidebarBodyItemsBox = styled.div`
  width: 100%;
`;
export const StyledSidebarBodyItemsBoxTitleContainer = styled.div`
  text-transform: uppercase;
  padding-left: 16px;
  padding-bottom: 8px;
`;
