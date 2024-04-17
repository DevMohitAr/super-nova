// VideoBackground.jsx
import React from "react";

const VideoBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src="../src/assets/video1.mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;

// VideoBackground.jsx
// import React from "react";

// const VideoBackground = () => {
//   return (
//     <div className="absolute h-screen  overflow-hidden w-screen brightness-[50%]">
//       <video autoPlay loop muted  >
//         <source src="../src/assets/video1.mp4" />
//       </video>
//     </div>
//   );
// };

// export default VideoBackgro