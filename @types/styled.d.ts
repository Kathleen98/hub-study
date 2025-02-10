import "styled-components";
import { defaultTheme } from "../src/styles/Theme";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
