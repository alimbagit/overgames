import { Typography } from '@material-ui/core';
import { IGameDescription } from 'models/game-description';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import * as E from "./elements";
// import 'react-responsive-carousel/lib/styles/carousel.min.css';



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
  website
}: IGameDescription) => {

  return (
    <div>
      <Typography variant="h2">{name}</Typography>
      <Typography>{background_image}</Typography>
      <Typography>{released}</Typography>
      <Typography>{description}</Typography>
      <E.CarouselWrapper>
        <Carousel emulateTouch showThumbs infiniteLoop>
          {screenshots && screenshots.map((screen, index) => (
            <E.ImageWrapper key={index.toString()}><E.Img alt="" src={screen.image} /></E.ImageWrapper>
          ))}
        </Carousel>
      </E.CarouselWrapper>
    </div>
  )
};

export default GameDescriptionViewer;