import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { Theme, ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import commonThemeProps from './commonThemeProps';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

interface MyThemeProdiver {
  theme?: Theme;
}

const defaultThemeOptions: ThemeOptions = {
  ...commonThemeProps,
  palette: {
    primary: {
      main: '#303030',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff0000',
      contrastText: '#fff',
    },
  },
};

export const defaultTheme = responsiveFontSizes(createMuiTheme(defaultThemeOptions));

const darkThemeOptions: ThemeOptions = {
  ...defaultThemeOptions,
  palette: { ...defaultThemeOptions.palette, type: 'dark' },
};

export const dark = responsiveFontSizes(createMuiTheme({ ...darkThemeOptions }));

const MyThemeProvider: React.FC<MyThemeProdiver> = ({ children, theme = defaultTheme }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </MuiThemeProvider>
  );
};

export { default as silverEcoLight } from './silver-eco';

export default MyThemeProvider;
