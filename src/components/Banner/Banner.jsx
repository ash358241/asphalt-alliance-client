import React from "react";
import { Carousel } from "react-bootstrap";
import carOne from "../../../src/img/car1.jpg";
import carTwo from "../../../src/img/car2.jpg";
import carThree from "../../../src/img/car3.jpg";
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carOne}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carTwo}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carThree}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
