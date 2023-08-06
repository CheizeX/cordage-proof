import styled from "styled-components";
import { theme } from "../../../themes/theme";
import { AvatarProps } from "./Avatar.interface";

export const StyledAvatarWrapper = styled.div<AvatarProps>`
  position: relative;
  width: ${({ size }) => size || 32}px;
  height: ${({ size }) => size || 32}px;
  border-radius: 50%;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  color: ${({ color }) => color || theme.colors["--white"]};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ shadow }) =>
    shadow ? "1px 1px 3px rgba(0, 0, 0, 0.25)" : "none"};
  border: ${({ outlined }) => (outlined ? "2px solid #fff" : "none")};

  & > div {
    display: ${({ star }) => (star ? "flex" : "none")};
    position: absolute;
    bottom: -2px;
    right: -3px;
    & * {
      max-width: 16px;
      max-height: 16px;
    }
  }
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
