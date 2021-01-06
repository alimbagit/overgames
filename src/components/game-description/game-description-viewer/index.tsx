import { Typography, Grid, Chip, Link } from "@material-ui/core";
import { IGameDescription } from "models/game-description";
import ScreenSlider from "./screen-slider";
import React from "react";
import PlatformChipsCreator from "./platform-chips-creator";

import {
  EventAvailable as EventAvailableIcon,
  AddShoppingCart as AddShoppingCartIcon,
  Stars as StarsIcon,
} from "@material-ui/icons";

const GameDescriptionViewer = ({
  name,
  parent_platforms,
  description,
  released,
  screenshots,
  clip,
  rating,
  website,
}: IGameDescription) => {
  return (
    <Grid container spacing={3}>
      {/* Название игры */}
      <Grid item xs={12}>
        <Typography variant="h3">{name}</Typography>
      </Grid>
      {/* Значки */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {/* Значок рейтинга */}
          <Grid item>
            <Chip
              icon={<StarsIcon />}
              label={rating}
              variant="outlined"
              title="rating"
            />
          </Grid>
          {/* Значок даты релиза */}
          {released && (
            <Grid item>
              <Chip
                icon={<EventAvailableIcon />}
                label={released}
                variant="outlined"
                title="released date"
              />
            </Grid>
          )}
          {/* Значки для платформ */}
          {PlatformChipsCreator(parent_platforms)}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ScreenSlider screenshots={screenshots} />
      </Grid>
      <Grid item xs={12}>
        <Typography>{description}</Typography>
      </Grid>
      {/* Значок для ссылки на веб-сайт */}
      <Grid item xs={12}>
        <Link href={website} variant="body1">
          Go to website {website}
        </Link>
      </Grid>
      {clip && (
        <Grid item xs={12}>
          <video controls src={clip?.clip} width={"100%"}></video>
        </Grid>
      )}
    </Grid>
  );
};

export default GameDescriptionViewer;
