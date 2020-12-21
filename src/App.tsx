import React from "react";
import TableViewer from "components/header";
import { AppWrapper } from "./elements";
import Footer from "components/gamesList";

const App = () => {
  return (
    <AppWrapper>
      <TableViewer />
      <Footer />
    </AppWrapper>
  );
};

export default App;