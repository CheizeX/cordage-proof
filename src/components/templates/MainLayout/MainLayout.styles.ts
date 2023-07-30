import styled from "styled-components";

export const StyledMainLayout = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  min-height: 100vh;
`;

export const StyledMainContentContainer = styled.main`
  border: 1px solid green;
  width: 100%;
  max-width: 100vw;
  height: calc(100vh - 64px);
  margin: 0 auto;
`;
