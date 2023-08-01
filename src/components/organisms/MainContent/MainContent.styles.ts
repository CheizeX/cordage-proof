import styled from "styled-components";

export const StyledMainContentSection = styled.section<{
  isCollapsed: boolean;
}>`
  flex: 1;
  display: flex;
  width: 100%;
  height: 100%;
  margin-left: ${(props) => (!props.isCollapsed ? "0" : "-232px")};
  padding: 28px 24px;
  transition: 0.3s ease-in-out;
`;
