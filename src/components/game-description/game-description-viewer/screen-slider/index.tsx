import React, { useEffect, useState } from "react";
import * as E from "./elements";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import breakpoint from "styled-components-breakpoint";

export interface IScreenSlider {
  screenshots?: {
    image: string;
  }[];
}

const ScreenSlider = ({ screenshots }: IScreenSlider) => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 500) setIsMobileDevice(false);
    else setIsMobileDevice(true)
  }, [isMobileDevice]);

  return (
    <>
      {screenshots && (
        <Carousel emulateTouch swipeScrollTolerance={2} transitionTime={600} showThumbs={!isMobileDevice}>
          {screenshots.map((screen, index) => (
            <div key={index.toString()}>
              <img alt="" src={screen.image} />
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default ScreenSlider;
