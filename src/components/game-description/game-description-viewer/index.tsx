import { Typography } from '@material-ui/core';
import { IGameDescription } from 'models/game-description';
import React from 'react';


const GameDescriptionViewer = ({ name, parent_platforms, description, released, background_image }: IGameDescription) => {

  return (
    <div>
      <Typography>{name}</Typography>
      <Typography>{background_image}</Typography>
      <Typography>{released}</Typography>
      <Typography>{description}</Typography>

    </div>
  )
};

export default GameDescriptionViewer;