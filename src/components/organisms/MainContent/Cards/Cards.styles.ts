import styled from "styled-components";

export const StyledCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  flex: 1;
  max-height: calc(100vh - 60px);
  border-radius: 4px;
  padding: 4px;
  overflow: auto;
`;

export const StyledCard = styled.div`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  min-width: 345px;
  height: 288px;
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledCardHeader = styled.div`
  position: relative;
  width: 100%;
  height: 64px;
  background: ${(props) => props.theme.colors["--neutral100"]};
`;
