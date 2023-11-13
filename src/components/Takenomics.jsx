import React from "react";
import Piechart from "./Piechart";

const Takenomics = () => {
  return (
    <div className="relative w-full h-full ">
      <img
        src="/assets/hero.png"
        alt="hero"
        className="absolute top-0 right-0 left-0 bottom-0 "
      />
      <h1 className="font-bold text-white text-lg absolute top-1 left-4">
        Takenomics
      </h1>
      <div className="sm:flex sm:items-center sm:justify-end md:flex md:justify-center">
        <Piechart />
      </div>
    </div>
  );
};

export default Takenomics;
