import React from "react";
import * as E from "./elements";
import { Link, Typography } from "@material-ui/core";

/**Логотип в загловке */
const Logo = () => {
  return (
    <E.LogoWrapper>
      <Typography variant="h5">OverGames</Typography>
    </E.LogoWrapper>
  );
};

export default Logo;
