import styled from "styled-components";

export const StyledWidgetBar = styled.aside`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 72px;
  height: 100%;
  padding: 16px;
  padding-top: 8px;
  border-left: 1px solid ${(props) => props.theme.colors["--neutral300"]};
  & > :first-child {
    & > div:not(:last-child) {
      border-bottom: 1px solid ${(props) => props.theme.colors["--neutral300"]};
    }
  }
`;

export const StyledWidgetBarTopContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: fit-content;
`;

export const StyledWidgetBarBottomContent = styled.div`
  position: absolute;
  bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  align-items: center;
  width: 100%;
  height: fit-content;
  & > :first-child {
    & * {
      min-width: 40px;
      min-height: 40px;
    }
  }
`;
export const StyledWidgetBarIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 8px 0;
  & > button {
    transition: 0.2s;
    &:hover {
      transform: scale(1.3);
      transition: 0.3s;
    }
    &:active {
      filter: grayscale(100%);
    }
  }
`;
