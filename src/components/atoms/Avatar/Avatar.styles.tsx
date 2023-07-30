import styled from "styled-components";
import { theme } from "../../../themes/theme";
import { AvatarProps } from "./Avatar.interface";

export const StyledAvatarWrapper = styled.div<AvatarProps>`
  width: ${({ size }) => size || 32}px;
  height: ${({ size }) => size || 32}px;
  border-radius: 50%;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  color: ${({ color }) => color || theme.colors["--white"]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledAvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;

export const getInitials = (text: string) => {
  const words = text.split(" ");
  if (words.length === 1) {
    return words[0].charAt(0);
  }
  return words[0].charAt(0) + words[words.length - 1].charAt(0);
};
