import React from "react";
import * as E from "./elements";
import { Link } from "@material-ui/core";

/**Логотип в загловке */
const Logo = () => {
  return (
    <E.LogoWrapper>
      <Link variant="h5" color="textPrimary" style={{ textDecoration: "none" }} href="/">
        OverGames
      </Link>
    </E.LogoWrapper>
  );
};

export default Logo;
