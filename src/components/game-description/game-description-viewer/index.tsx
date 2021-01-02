import { Typography, Grid } from "@material-ui/core";
import { IGameDescription } from "models/game-description";
import ScreenSlider from "./screen-slider";
import React from "react";
import * as E from "./elements";

const GameDescriptionViewer = ({
  name,
  parent_platforms,
  description,
  released,
  background_image,
  screenshots,
  clip,
  rating,
  slug,
  website,
}: IGameDescription) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h3">{name}</Typography>
      </Grid>
      <Grid item xs={12}>
        <ScreenSlider screenshots={screenshots} />
      </Grid>
      <Grid item xs={12}>
        {/* <Typography>{background_image}</Typography> */}
        <Typography>{released}</Typography>
        <Typography>{description}</Typography>
      </Grid>
    </Grid>
  );
};

export default GameDescriptionViewer;
