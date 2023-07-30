import styled from "styled-components";
import { theme } from "../../../themes/theme";

interface TextProps {
  family?: string;
  size?: string;
  color?: string;
  weight?: string;
}

const Text = styled.p<TextProps>`
  font-family: ${(props) => props.family ?? "Satoshi-Variable"};
  font-size: ${(props) => props.size ?? "1.6rem"};
  color: ${(props) => props.color ?? theme.colors["--neutral800"]};
  font-weight: ${(props) => props.weight ?? "400"};
`;

export default Text;
