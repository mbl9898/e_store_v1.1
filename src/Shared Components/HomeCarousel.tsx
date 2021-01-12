import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { imgLinks } from "../data";

const HomeCarousel: React.FC = () => {
  return (
    <div className="homeCarousel">
      <Carousel interval={3000} indicators={false} pause={"hover"}>
        {imgLinks.map((imageLink, index) => {
          return (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 carouselImg"
                src={imageLink}
                alt="slideImage"
              />
            </Carousel.Item>
          );
        })}
        ;
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
