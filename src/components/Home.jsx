import React, { useEffect, useState } from "react";

import Backvid from "./Backvid";
import Aos from "aos";
import "aos/dist/aos.css";
import Roadmap from "./Roadmap";
import Listing from "./Listing";
import Testimonial from "./Testimonial";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [move, setMove] = useState(false);
  setTimeout(() => {
    setMove(!move);
  }, 1000);
  const trans = move ? "23" : "3";

  console.log(trans);
  return (
    <div className="relative ">
      <div className="">
        <Backvid />
      </div>

      <section
        data-aos-duration="4000"
        data-aos-delay="2000"
        data-aos="fade-right"
        className="w-full absolute top-0  mx-auto h-full     md:px-10 sm:mt-0 md:mt-7 z-0"
      >
        <div className="max-w-7xl mx-auto sm:px-4 px-1.5 flex flex-row gap-1.5 items-start">
          <div className="flex flex-col items-center justify-center mt-1">
            <div className="rounded-full bg-[#915EFF] w-5 h-5"></div>
            <div className=" viol w-1 sm:h-40 md:h-80 "></div>
          </div>
          <div>
            <h1 className="font-black text-white lg:text-[80px] sm:text-[40px]  lg:leading-[98px] sm:mt-0 md:mt-2">
              <span className="text-[#915EFF]">Hype Meme Token</span>
            </h1>
            <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-5   text-[16px] lg:leading-[40px] mt-2 ">
              A winning horse to bid on. Future of tax free cross boundary trade
            </p>
            <br className="sm:block hidden" />
            <img
              src="/assets/logo.svg"
              alt="logo"
              className="md:h-80 md:w-96 sm:h-40 sm:w-52"
            />
          </div>
        </div>
        {/* <div className="absolute sm:bottom-10 bottom-32 md:w-3/4  flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[rgb(170,166,195)] flex justify-center items-start p-2">
              <div
                className={`translate-x-[${trans}] translate-y-[${trans}] w-1 h-4 rounded-full bg-[rgb(170,166,195)] mb-1`}
              ></div>
            </div>
          </a>
        </div> */}
      </section>
      <section className="sm:px-4 px-1 sm:py-4 py-3 max-w-7xl mx-auto relative z-0 sm:mt-32 md:mt-0 mb-3">
        <span id="about">&nbsp;</span>

        <div className="" data-aos="fade-right">
          <br />
          <br />
          <p className="sm:text-[18px] text-[14px] text-[rgb(170,166,195)] uppercase tracking-wider">
            Introduction
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[40px]  text-[30px]">
            Overview.
          </h2>
        </div>

        <p
          data-aos-duration="4000"
          data-aos="fade-left"
          className="mt-1 text-[rgb(170,166,195)] text-[17px] max-w-3xl leading-[30px] opacity-100 transform-none"
        >
          We brought to you the new meme , Hype Meme Token (HMTT) Like Doge
          Coin, Hype me is going to make you rich and committed to hype you over
          the night . HMT will burn 10% Token from totall supply and will add
          liquidity 30% as well as ensuring sustainability of HMT. it will bring
          trend like Doge and floki CEO what they did in past. Our goal is to
          list HMT on 10-15 major top cex which will dominate worldwide into all
          meme.
        </p>
        <div className="mt-5 flex flex-wrap gap-10">
          <div
            data-aos-delay="1000"
            data-aos-duration="100"
            data-aos="fade-right"
            className="sm:w-[250px] w-full hover:rotate-6 hover:scale-x-50 "
          >
            <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card opacity-100 transform-none">
              <div className="rounded-[20px] bg-[rgb(21,16,48)] py-1 px-3 min-h-[280px] flex justify-evenly items-center flex-col">
                <img
                  src="/assets/web.png"
                  alt="web development"
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  Meme-Centric Approach
                </h3>
              </div>
            </div>
          </div>
          <div
            data-aos-duration="100"
            data-aos-delay="2000"
            data-aos="fade-right"
            className="sm:w-[250px] w-full hover:rotate-6 hover:scale-y-50"
          >
            <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card opacity-100 transform-none">
              <div className="rounded-[20px] bg-[rgb(21,16,48)] py-1 px-3 min-h-[280px] flex justify-evenly items-center flex-col">
                <img
                  src="/assets/mobile.png"
                  alt="web development"
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  Community-Driven
                </h3>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="100"
            data-aos-delay="3000"
            className="sm:w-[250px] w-full hover:rotate-3 hover:scale-x-50"
          >
            <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card opacity-100 transform-none">
              <div className="rounded-[20px] bg-[rgb(21,16,48)] py-1 px-3 min-h-[280px] flex justify-evenly items-center flex-col">
                <img
                  src="/assets/web.png"
                  alt="web development"
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  Automatic Liquidity Pool:
                </h3>
              </div>
            </div>
          </div>
          <div
            data-aos-duration="100"
            data-aos-delay="3500"
            data-aos="fade-right"
            className="sm:w-[250px] w-full hover:rotate-4 hover:scale-x-50"
          >
            <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card opacity-100 transform-none">
              <div className="rounded-[20px] bg-[rgb(21,16,48)] py-1 px-3 min-h-[280px] flex justify-evenly items-center flex-col">
                <img
                  src="/assets/creater.png"
                  alt="web development"
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  Rewards and Incentives
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Roadmap />
      <Listing />
      <Testimonial />
    </div>
  );
};

export default Home;
