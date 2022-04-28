import React from "react";
import { HomePageContainer } from "./homepage.styled.jsx"; 
import VideoBackground from "../../components/videoBackground/videoBackground";

const Homepage = () => {
  return (
    <HomePageContainer>
      <div className="background-image">
        <div className="profile-image"></div>
        <div className="profile-text">Full Stack Developer</div>
      </div>

      <div className="main-section">
        <VideoBackground />

        <div className="about-container">
          <div className="title">About Me</div>
          <div className="content">
            <div className="image-container"></div>
            <div className="description">
            
              Hi, my name is Vincent Juma, a full stack web developer proficient
               in Node/Express, React Js, Redux and MongoDB. I have
              2 years of experience writing production level code with some of the popular Javascript 
              Libraries. I take pride in creating solutions to problems faced by clients and 
              I ensure any client I serve gets the best from me. I'm a curious persion, I love
              learning new and challenging things, I enjoy solving problems. Am also an active contributor
              to open source projects on <a id='github-link' href="https://github.com/juma-vincent">github</a>.
              Feel free to reach out to me, via the contact details below. 
            </div>
          </div>
        </div>
      </div>
    </HomePageContainer>
  );
};

export default Homepage;
