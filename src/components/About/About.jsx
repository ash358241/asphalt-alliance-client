import React from "react";
import "./About.css";
import aboutImg from "../../img/abt.jpg";
import aboutImgTwo from "../../img/abt2.jpg";
import aboutImgThree from "../../img/abt3.jpg";
import { Carousel } from "react-bootstrap";
import Fade from 'react-reveal/Fade';


const About = () => {
  return (
    <div className="about">
      <div className="aboutContent container">
        <div className="aboutImg">
        <Fade left duration={2500} distance="40px">
          <Carousel>
            <Carousel.Item>
              <img
                src={aboutImg}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={aboutImgTwo}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={aboutImgThree}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          </Fade>
        </div>
        <div className="aboutTxt">
        <Fade right duration={2500} distance="40px">
          <h3>About Asphalt Alliance</h3>
          <br />
          <p>
            Asphalt Alliance is a platform for car enthusiasts where they can
            share their their enthusiasms on the car they they love and desire.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            reprehenderit sunt inventore distinctio et earum iusto impedit illo
            reiciendis, labore temporibus voluptates, totam iste qui! Quo fugiat
            sequi excepturi qui. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dicta dolorem ea labore, nobis, dolor veritatis,
            perferendis voluptatem aspernatur doloribus quas blanditiis debitis
            facilis minima! Minus eveniet nemo inventore tempore modi.
          </p>
          <button className="btn btn-info px-4 py-2"><a href="#allEntries">Explore</a></button>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
