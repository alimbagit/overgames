import React from "react";
import { Chip, Grid } from "@material-ui/core";

const PlatformChipsCreator = (  parent_platforms: {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}[]) => {
  return parent_platforms.map((platform, index) => (
    <Grid item key={index.toString()}>
      <Chip
        label={platform.platform.name}
        variant="outlined"
        title={platform.platform.name + "platform"}
      />
    </Grid>
  ));
};

export default PlatformChipsCreator;
