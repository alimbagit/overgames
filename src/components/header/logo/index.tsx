import React from "react";
import * as E from "./elements";
import { Link, Typography } from "@material-ui/core";

/**Логотип в загловке */
const Logo = () => {
  return (
    <E.LogoWrapper>
      <Link href="/">
        <Typography variant="h5">OverGame</Typography>
      </Link>
    </E.LogoWrapper>
  );
};

export default Logo;
