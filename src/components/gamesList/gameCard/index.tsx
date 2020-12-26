import React from "react";
import * as E from "./elements";
import { Card, Typography } from "@material-ui/core";
import { IGameInfo } from "models";

const GameCard = ({ name, released, rating }: IGameInfo) => {
  return (
    <E.OneGameWrapper>
      <Card>
        <Typography>{name}</Typography>
        <Typography>{released}</Typography>
        <Typography>{rating}</Typography>
      </Card>
    </E.OneGameWrapper>
  );
};

export default GameCard;
