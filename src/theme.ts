import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({

  palette: {
    background: {
      default: "ffffff"
    },
    primary: {
      main: "#303030",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff0000",
      contrastText: "#fff",
    },
    text: {
      primary: "999999",
    },
  },
});

export const defaultTheme = responsiveFontSizes(theme);
