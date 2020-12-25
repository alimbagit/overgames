import React from "react";
import { AppWrapper } from "./elements";
import GamesList from "components/gamesList";
import Header from "./components/header";
import { defaultTheme } from "theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import { rootReducer } from "utils/myRedux/rootReducer";
import { devToolsEnhancer } from "redux-devtools-extension";

const store = createStore(rootReducer, devToolsEnhancer({}));

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <ReduxProvider store={store}>
        <AppWrapper>
          <Header />
          <GamesList />
        </AppWrapper>
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default App;
