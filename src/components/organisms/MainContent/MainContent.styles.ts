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
