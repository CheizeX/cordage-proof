import styled from "styled-components";

export const StyledAppBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100vw;
  width: 100%;
  height: 64px;
  margin: 0 auto;
  border-bottom: 1px solid ${(props) => props.theme.colors["--neutral200"]};
  padding: 8px 16px 8px 8px;
  background: ${(props) => props.theme.colors["--white"]};
`;

export const StyledAppBarLeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 40px;
`;

export const StyledAppBarRightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  height: 40px;
  & > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const StyledNavbar = styled.nav`
  display: flex;
  gap: 6.675px;
`;
