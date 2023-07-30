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
