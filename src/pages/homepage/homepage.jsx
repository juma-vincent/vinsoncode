import React from "react";
import "./homepage.scss";
import VideoBackground from "../../components/videoBackground/videoBackground";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="background-image"></div>

      <div className="main-section">
        <VideoBackground />

        <div className="about-container">
          <div className="title">About Me</div>
          <div className="content">
            <div className="image-container"></div>
            <div className="description">
              My name is Vincent Juma, a self taught front-end developer, with
              immense experience in React JS and Redux Saga. I enjoy building
              solutions that rightfully meets the user's expectations which has
              lasting value. I'm also passionate about contributing to open
              source projects which have significantly added more to my
              programming repetoire.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
