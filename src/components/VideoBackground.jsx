// VideoBackground.jsx
import React from "react";

const VideoBackground = () => {
  return (
    <div className="absolute h-screen overflow-hidden w-screen brightness-[50%]">
      <video autoPlay loop muted>
        <source src="../src/assets/video1.mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
