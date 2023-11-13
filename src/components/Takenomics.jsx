import React from "react";
import Piechart from "./Piechart";
const Takenomics = () => {
  return (
    <div className="tokenbg w-full h-full flex flex-col ">
      <h1 className="font-bold text-[rgb(170,166,195)] text-lg pt-3   flex items-center justify-center ">
        Tokenomics
      </h1>
      <div className="flex items-center justify-center  ">
        <Piechart />
      </div>
    </div>
  );
};

export default Takenomics;
