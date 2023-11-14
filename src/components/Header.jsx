import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { RxTwitterLogo } from "react-icons/rx";
import { ROOT_URL } from "../App";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex justify-between  bg-[rgb(5,8,22)] items-center py-6 md:px-14 sm:px-8 sticky top-0 z-40">
      <div className="flex ">
        <a href="/">
          <img
            src="/assets/logo.svg"
            alt="logo"
            className="w-9 h-9 object-contain"
          />
        </a>
        <h1 className=" text-white font-bold text-lg ml-1 flex">
          HYPE MEME TOKEN&nbsp;{" "}
          <span className="sm:hidden md:flex"> | HMTT</span>
        </h1>
      </div>
      <div className="sm:hidden xl:flex">
        <ul className="text-white flex  gap-10 cursor-pointer  ">
          <li className="text-[rgb(170,166,195)]  hover:text-white text-[18px] font-medium">
            {" "}
            <a href="#about">About</a>
          </li>
          <li className="text-[rgb(170,166,195)] hover:text-white text-[18px] font-medium">
            {" "}
            <a href="#contact">Contact</a>
          </li>
          <li>
            {" "}
            <a href={`${ROOT_URL}/roadmap`}>RoadMap</a>
          </li>
          <li>
            {" "}
            <a href={`${ROOT_URL}/takenomics`}>Tokenomics</a>
          </li>
          <li>
            {" "}
            <a href={`${ROOT_URL}/team`}>Team</a>
          </li>
          <li>
            <a href="https://t.me/HMT_BEP20">
              <IoIosSend />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/HMT_BEP20/">
              <RxTwitterLogo />
            </a>
          </li>
        </ul>
      </div>
      <div className="sm:flex xl:hidden relative">
        <button onClick={() => setMenu(!menu)}>
          {menu ? (
            <img
              src="/assets/close.svg"
              alt="close"
              className="w-7 h-7 object-contain"
            />
          ) : (
            <img
              src="/assets/menu.svg"
              alt="menu"
              className="w-7 h-7  object-contain"
            />
          )}
        </button>
        {menu && (
          <div className="flex p-6  absolute bg-gradient-to-r from-[rgb(67,67,67)] to-black  top-12 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl">
            <ul className="text-white flex flex-col items-start justify-end gap-4 cursor-pointer  ">
              <li className="text-[rgb(170,166,195)]  hover:text-white text-[18px] font-medium">
                <a href="#about">About</a>
              </li>
              <li className="text-[rgb(170,166,195)] hover:text-white text-[18px] font-medium">
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="https://react-web-design.onrender.com/roadmap">
                  RoadMap
                </a>
              </li>
              <li>
                <a href={`${ROOT_URL}/takenomics`}>Tokenomics</a>
              </li>
              <li>
                <a href={`${ROOT_URL}/team`}>Team</a>
              </li>
              <li>
                <a href="https://t.me/HMT_BEP20">
                  <IoIosSend />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/HMT_BEP20/">
                  <RxTwitterLogo />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
