import React from "react";
import "./videoBackground.scss";

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video className="video-content" autoPlay muted loop>
        <source src="/videos/bgvideo1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
