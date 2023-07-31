import styled from "styled-components";
import { IconButtonProps } from "./IconButton.interface";

export const StyledButton = styled.button<Omit<IconButtonProps, "icon">>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.width ? props.width : "40px")};
  height: ${(props) => (props.height ? props.height : "40px")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  border-radius: ${(props) => (props.radius ? props.radius : "50%")};
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
