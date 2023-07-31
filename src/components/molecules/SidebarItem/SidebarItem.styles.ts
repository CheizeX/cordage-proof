import styled from "styled-components";

export const StyledSidebarBodyItem = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 40px;
  padding: 0px 16px 0px 24px;
  background: transparent;
  &:hover {
    transition: 0.2s;
    background: rgba(255, 255, 255, 0.1);
  }
`;
