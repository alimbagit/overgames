import React from "react";
import TableViewer from "components/header";
import { AppWrapper } from "./elements";
import Footer from "components/gamesList";
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>

        <TableViewer />
        <Footer />

      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;