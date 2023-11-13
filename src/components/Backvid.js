import React from "react";

const Backvid = () => {
  return (
    <div>
      <video
        src="/assets/techvide.mp4"
        loop
        autoPlay
        muted
        playsInline
        className="aaspectvide sm:h-full border-0 md:h-full"
      ></video>
    </div>
  );
};

export default Backvid;
