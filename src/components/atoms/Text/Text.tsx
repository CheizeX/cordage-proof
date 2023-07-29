import styled from "styled-components";
import { theme } from "../../../themes/theme";

interface TextProps {
  size?: string;
  color?: string;
}

const Text = styled.p<TextProps>`
  font-family: "Satoshi Variable";
  font-size: ${(props) => props.size ?? "1.6rem"};
  color: ${(props) => props.color ?? theme.colors["--neutral800"]};
`;

export default Text;
