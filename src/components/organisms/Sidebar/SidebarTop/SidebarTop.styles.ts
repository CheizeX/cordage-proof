import styled from "styled-components";

export const StyledSidebarTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 60px;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors["--neutral700"]};
`;

export const StyledOrganizationInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 44px;
`;

export const StyledOrganizationInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  & > span {
    display: flex;
    height: fit-content;
    gap: 12px;
    & > div {
      transform: rotate(-90deg);
    }
  }
`;
