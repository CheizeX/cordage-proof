import { Theme } from "../interfaces/Theme";
import configStyles from "./configStyles.json";

export const theme: Theme = {
  fonts: configStyles.fonts,
  fontSizes: configStyles.fontSizes,
  colors: configStyles.colors,
  spaces: configStyles.spaces,
};
