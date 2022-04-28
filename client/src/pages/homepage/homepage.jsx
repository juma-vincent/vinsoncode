import React from "react";
import { HomePageContainer } from "./homepage.styled.jsx"; 
import VideoBackground from "../../components/videoBackground/videoBackground";

const Homepage = () => {
  return (
    <HomePageContainer>
      <div className="background-image">     
        
      </div>

      <div className="main-section">
        <VideoBackground />

        <div className="about-container">
          <div className="title">About Me</div>
          <div className="content">
            <div className="image-container"></div>
            <div className="description">
            
              Hi, my name is Vincent Juma, a full stack web developer proficient
              in React|Redux, Laravel and Node. I have
              3 years of experience writing production code using current libraries and frameworks.
              I find delight in unravelling problems faced today by leveraging the web technology. 
              Am also an active contributor to open source projects
               on <a id='github-link' href="https://github.com/juma-vincent">github</a>.
              Feel free to reach out to me. 
            </div>
          </div>
        </div>
      </div>
    </HomePageContainer>
  );
};

export default Homepage;
