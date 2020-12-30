import React from "react";
import { Button } from "@material-ui/core";
import * as GE from "components/globalElements";
import * as E from "./elements";

const BackButton = () => {
  return (
    <E.ButtonWrapper>
      <GE.Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="text" color="secondary" size="medium" >
          {"<< Back to catalog"}
        </Button>
      </GE.Link>
    </E.ButtonWrapper>
  );
};

export default BackButton;
