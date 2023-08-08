import styled from "styled-components";

export const StyledSidebarTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 84px;
  width: 100%;
  padding: 20px;
`;

export const StyledOrganizationInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  /* height: 44px; */
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

export const StyledSubmenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;

  transition: 0.5s !important;
  & > :first-child {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: -4px;
    background: transparent;
    & > :first-child,
    & > :last-child {
      transition: 0.5s ease-in-out;
    }
    &:hover {
      & > :first-child {
        transition: 0.5s ease-in-out;
        transform: rotate(-360deg);
      }
      & > :last-child {
        transition: 0.5s ease-in-out;
        color: #fff;
      }
    }
  }
  & > :last-child {
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 16px;
    padding-left: 8px;
  }
`;
