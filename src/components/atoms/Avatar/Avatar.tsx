import React from "react";
import { AvatarProps } from "./Avatar.interface";
import Text from "../Text/Text";
import * as S from "./Avatar.styles";
import { theme } from "../../../themes/theme";
import { ReactSVG } from "react-svg";

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
  backgroundcolor,
  color,
  outlined,
  shadow,
  star,
}) => {
  if (image) {
    return (
      <S.StyledAvatarWrapper
        size={size}
        backgroundcolor={backgroundcolor}
        color={color}
        shadow={shadow}
        star={star}
        outlined={outlined}>
        <S.StyledAvatarImage src={image} alt={alt} />
      </S.StyledAvatarWrapper>
    );
  }

  if (text) {
    return (
      <S.StyledAvatarWrapper
        size={size}
        backgroundcolor={backgroundcolor}
        color={color}
        shadow={shadow}
        star={star}
        outlined={outlined}>
        <Text color={color ?? theme.colors["--white"]}>
          {getInitials(text)}
        </Text>
        {star && <ReactSVG src='/Avatarstart.svg' />}
      </S.StyledAvatarWrapper>
    );
  }

  return null;
};

export default Avatar;
