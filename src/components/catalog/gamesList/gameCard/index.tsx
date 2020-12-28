import React from "react";
import * as E from "./elements";
import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { IGameInfo } from "models";
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const GameCard = ({ name, released, rating, backgroundImage, screenshots, slug }: IGameInfo) => {
  const theme = useTheme();
  return (
    <E.OneGameWrapper>
      <Card variant="elevation">
        <E.ImageWrapper><E.Img src={backgroundImage} /></E.ImageWrapper>
        <CardContent>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle1">Release: {released}</Typography>
          <Typography>Rating: {rating}</Typography>
        </CardContent>
        <CardActions >
          <Link to={"/game/" + slug}>
            <Button variant="text" color="secondary" size="small" >Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </E.OneGameWrapper>
  );
};

export default GameCard;
