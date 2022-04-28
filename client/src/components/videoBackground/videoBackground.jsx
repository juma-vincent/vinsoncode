import React from "react";
import { VideoBackgroundContainer } from "./videoBackground.styled";


const VideoBackground = () => {
  return (
    <VideoBackgroundContainer>
      <video className="video-content" autoPlay muted loop>
        <source src="/videos/bgvideo1.mp4" type="video/mp4" />
      </video>
    </VideoBackgroundContainer>
  );
};

export default VideoBackground;
