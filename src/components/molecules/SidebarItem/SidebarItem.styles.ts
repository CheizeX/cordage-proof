import styled from "styled-components";

export const StyledSidebarBodyItem = styled.button<{ selected: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 40px;
  padding: 0px 16px 0px 24px;
  background: ${(props) =>
    props.selected
      ? `linear-gradient(90deg, ${props.theme.colors["--neutral700"]} 0%, ${props.theme.colors["--neutral700"]} 100%)`
      : "transparent"};
  border-right: ${(props) =>
    props.selected ? `4px solid ${props.theme.colors["--orange500"]}` : "none"};

  &:hover {
    transition: 0.2s;
    background: rgba(255, 255, 255, 0.1);
  }
  &:active {
    opacity: 0.9;
  }
  & > span {
    position: absolute;
    right: 16px;
    width: 8px;
    height: 8px;
    background: ${(props) => props.theme.colors["--celeste600"]};
    border-radius: 50%;
  }
`;
