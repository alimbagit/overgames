import React from "react";
import TableViewer from "components/header";
import { WrapperApp } from "./elements";
import Footer from "components/gamesList";

const App = () => {
  return (
    <WrapperApp>
      <TableViewer />
      <Footer />
    </WrapperApp>
  );
};

export default App;