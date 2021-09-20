import React from "react";
import { Carousel } from "react-bootstrap";
import carOne from "../../../src/img/car1.jpg";
import carTwo from "../../../src/img/car2.jpg";
import carThree from "../../../src/img/car3.jpg";
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carOne}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carTwo}
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carThree}
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
