import styled, { css } from "styled-components";
import { ReactSVG } from "react-svg";

export const StyledButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: transparent;
  /* padding: 8px; */
  &:hover {
    opacity: 0.8;
  }
`;

export const StyledIcon = styled(ReactSVG)<{
  color?: string;
}>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    & > svg {
      & > g {
        & > path {
          ${(props) =>
            props.color &&
            css`
              stroke-width: 1.5px;
              stroke: ${props.color};
            `}
        }
      }
    }
  }
`;

export const StyledStatusIndicator = styled.div<{
  status?: boolean;
}>`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 8px;
  right: 6px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors["--red500"]};
  display: ${(props) => (props.status ? "block" : "none")};
`;
