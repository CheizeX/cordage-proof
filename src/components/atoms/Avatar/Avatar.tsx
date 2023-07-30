import React from "react";
import { AvatarProps } from "./Avatar.interface";
import Text from "../Text/Text";
import * as S from "./Avatar.styles";
import { theme } from "../../../themes/theme";

const getInitials = (text: string) => {
  const words = text.split(" ");
  if (words.length === 1) {
    return words[0].charAt(0);
  }
  return words[0].charAt(0) + words[words.length - 1].charAt(0);
};

const Avatar: React.FC<AvatarProps> = ({
  text,
  image,
  alt,
  size,
  backgroundColor,
  color,
}) => {
  if (image) {
    return (
      <S.StyledAvatarWrapper
        size={size}
        backgroundColor={backgroundColor}
        color={color}>
        <S.StyledAvatarImage src={image} alt={alt} />
      </S.StyledAvatarWrapper>
    );
  }

  if (text) {
    return (
      <S.StyledAvatarWrapper size={size} backgroundColor={backgroundColor}>
        <Text color={color ?? theme.colors["--white"]}>
          {getInitials(text)}
        </Text>
      </S.StyledAvatarWrapper>
    );
  }

  return null;
};

export default Avatar;
