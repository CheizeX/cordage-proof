import styled from "styled-components";

export const StyledCardsContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  flex: 1;
  border-radius: 4px;
  padding: 4px;
  padding-bottom: 80px;
  overflow: auto;
  scroll-behavior: smooth;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  min-width: 345px;
  max-width: 445px;
  flex: 1;
  height: 288px;
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledCardHeader = styled.div<{
  img: string;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 64px;
  padding: 14px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  & > :first-child {
    position: absolute;
    left: 16px;
    top: 42px;
  }
  & > :last-child {
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 1;
    }
  }
`;

export const StyledCardBody = styled.div`
  width: 100%;
  height: fit-content;
  padding: 24px 16px 0 16px;
  height: 100%;
  & > h1 {
    font-size: 20px;
    font-weight: 500;
  }
  & > h2 {
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme.colors["--neutral500"]};
  }
  & > p {
    margin-top: 16px;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.3;
  }
`;

export const StyledCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 36px;
  height: 36px;
  padding: 16px;
  margin-bottom: 16px;
  & > div {
    display: flex;
    align-items: center;
    height: 100%;
  }

  & > :first-child {
    & > span {
      display: flex;
      align-items: center;
      min-height: 28px;
      height: 28px;
      padding: 0 10px;
      background: ${(props) => props.theme.colors["--neutral100"]};
      color: ${(props) => props.theme.colors["--neutral500"]};
      border-radius: 4px;
    }
  }
`;
