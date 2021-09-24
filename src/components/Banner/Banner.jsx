import React from "react";
import carOne from "../../../src/img/bannerLambo.jpg";
import bannerVid from "../../../src/img/bgVideo.mp4";
import "./Banner.css";
import HoverVideoPlayer from 'react-hover-video-player';

const Banner = () => {
 
  return (
    <div className="banner">
      <HoverVideoPlayer
      style={{opacity:'0.6'}}
      videoSrc={bannerVid}
      pausedOverlay={
        <img
          src={carOne}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
    />
    </div>
  );
};

export default Banner;
