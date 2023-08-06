import { ReactSVG } from "react-svg";
import styled, { css } from "styled-components";

export const StyledIcon = styled(ReactSVG)<{
  color?: string;
  iconsize?: string;
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
      width: ${(props) => props.iconsize ?? "24px"};
      height: ${(props) => props.iconsize ?? "24px"};
      & path {
        ${(props) =>
          props.color &&
          css`
            /* stroke-width: 1px; */
            stroke: ${props.color};
          `}
      }
    }
  }
`;
