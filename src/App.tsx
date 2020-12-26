import React from "react";
import { AppWrapper } from "./elements";
import GamesList from "components/gamesList";
import Header from "./components/header";
import { defaultTheme } from "theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { createStore, applyMiddleware } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import { rootReducer } from "store/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

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
