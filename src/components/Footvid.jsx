import React from "react";

const Footervideo = () => {
  return (
    <div>
      <video
        src="/assets/world.mp4"
        loop
        autoPlay
        muted
        playsInline
        className="aaspectvide sm:h-full border-0 md:h-full"
      ></video>
    </div>
  );
};

export default Footervideo;
