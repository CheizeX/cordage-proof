import { ReactSVG } from "react-svg";
import styled, { css } from "styled-components";

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
      & path {
        ${(props) =>
          props.color &&
          css`
            stroke-width: 1.5px;
            stroke: ${props.color};
          `}
      }
    }
  }
`;
