import React from "react";
import { AppWrapper } from "./elements";
import { defaultTheme } from "theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { createStore, applyMiddleware } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import { rootReducer } from "store/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Catalog from "components/catalog";
import GameDescription from "components/game-description";


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const App = () => {

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <ReduxProvider store={store}>
        <Router>
          <AppWrapper>
            <Route exact path="/" component={Catalog} />
            <Route exact path="/game/:game_name" component={GameDescription} />
          </AppWrapper>
        </Router>
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default App;
