import styled from "styled-components";

export const StyledAppBar = styled.header`
  display: flex;
  width: 1440px;
  height: 64px;
  padding: 8px 16px 8px 8px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors["--neutral200"]};
  background: ${(props) => props.theme.colors["--white"]};
`;
