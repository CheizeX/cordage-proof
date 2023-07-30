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
  font-size: ${(props) => props.size ?? theme.fontSizes["text-xs"]};
  color: ${(props) => props.color ?? theme.colors["--neutral800"]};
  font-weight: ${(props) => props.weight ?? "400"};
  line-height: 24px;
`;

export default Text;
