import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({

  palette: {
    background: {
      default: "#ffffff",
    },
    primary: {
      main: "#593488",
      light: "#af75fa"
    },
    secondary: {
      main: "#421977",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#111111",
    },
  },
});

export const defaultTheme = responsiveFontSizes(theme);
