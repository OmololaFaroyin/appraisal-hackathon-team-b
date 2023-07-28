import {
  createTheme,
  PaletteColorOptions,
  Theme,
  SxProps,
  CSSObject,
} from "@mui/material/styles";

const dvaultRed = "#E97D80";
const dvaultGreen = "#A5D6A7";
const dvaultGreenIcon = "#1B5E20";
const dvaultPurple = "#FFD8E4";
const dvaultPurpleIcon = "#31111D";
const dvaultFlagRed = "#FFCCBC";
const dvaultFlagIcon = "#BF360C";
const dvaultBlack = "#000000";
const dvaultWhite = "#ffffff";
const dvaultLinkRedBg = "#FFEDED";
const dvaultDarkBlue = "#032443";
const dvaultLightBlue = "#8CA1B6";
const prdBackground = "#F3F6F9";
const prdPurple = "#E8DEF8";
const PrdText = "#2A2A44";

declare module "@mui/material/styles" {
  interface Theme {
    common: CommonColors;
    breakpoints: {
      down(arg0: string): string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    [key: string]: any;
  }

  interface CommonColors {
    red: string;
    green: string;
    purple: string;
    purpleIcon: string;
    greenIcon: string;
    flagRed: string;
    flagIcon: string;
    linkRedBg: string;
    darkBlue: string;
    lightBlue: string;
    black: string;
    white: string;
    background: string;
    prdPur: string;
    prdT: string;
  }

  interface PaletteOptions {
    accent?: PaletteColorOptions;
  }

  interface ThemeOptions {
    unstable_sx?: (props: SxProps<Theme>) => CSSObject;
  }
}

export const theme: Theme = createTheme({
  palette: {
    common: {
      red: dvaultRed,
      green: dvaultGreen,
      purple: dvaultPurple,
      purpleIcon: dvaultPurpleIcon,
      greenIcon: dvaultGreenIcon,
      flagRed: dvaultFlagRed,
      flagIcon: dvaultFlagIcon,
      linkRedBg: dvaultLinkRedBg,
      darkBlue: dvaultDarkBlue,
      lightBlue: dvaultLightBlue,
      black: dvaultBlack,
      white: dvaultWhite,
      background: prdBackground,
      prdPur: prdPurple,
      prdT: PrdText,
    },
    primary: {
      main: dvaultRed,
    },
    secondary: {
      main: dvaultBlack,
    },
    accent: {
      main: dvaultLightBlue,
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: ["Poppins", "sans-serif"].join(","),
    button: {
      textTransform: "none",
    },
  },
});
