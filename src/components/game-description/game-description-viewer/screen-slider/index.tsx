import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export interface IScreenSlider {
  screenshots?: {
    image: string;
  }[];
}

const ScreenSlider = ({ screenshots }: IScreenSlider) => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 500) setIsMobileDevice(false);
    else setIsMobileDevice(true);
  }, [isMobileDevice]);

  return (
    <>
      <Carousel
        emulateTouch
        swipeScrollTolerance={2}
        transitionTime={600}
        showThumbs={!isMobileDevice}
      >
        {screenshots &&
          screenshots.map((screen, index) => (
            <div key={index.toString()}>
              <img alt="" src={screen.image} />
            </div>
          ))}
      </Carousel>
    </>
  );
};

export default ScreenSlider;
