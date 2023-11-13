import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Listing = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <section className="sm:px-4 px-5 sm:py-4 py-2.5  max-w-7xl mx-auto relative z-0">
        <span>&nbsp;</span>
        {/* Listing header */}
        <div data-aos-delay="1000" data-aos="fade-right">
          <p className="sm:text-[18px] text-[14px] text-[rgb(170,166,195)] uppercase tracking-wider">
            Our Listing
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[40px]  text-[30px]">
            Listing Plans
          </h2>
        </div>
        {/* image listing */}
        <div className="w-full flex">
          <p
            data-aos-delay="1000"
            data-aos="fade-right"
            className="mt-3 text-[rgb(170,166,195)] text-[17px] max-w-3xl leading-[30px]"
          >
            We will list on
          </p>
        </div>
        <section className="mt-5 flex flex-wrap gap-7">
          {/* // image one */}
          <div
            data-aos-delay="1000"
            data-aos="fade-right"
            className="bg-[rgb(21,16,48)] p-5 rounded-2xl sm:w-[360px] w-full"
          >
            <div className="relative w-full h-[230px]">
              <img
                src="/assets/carrent.png"
                className="w-full h-full object-cover rounded-2xl"
                alt="project mage"
              />
            </div>
            <div className="mt-5">
              <h2 className="text-white font-bold text-[24px]">Mexc</h2>
              <p className="mt-2 text-[rgb(170,166,195)] text-[14px]">
                {" "}
                Provides fast and secure digital asset trading, real-time prices
                of crypto tokens such as Bitcoin BTC, Ethereum ETH plus
              </p>
            </div>
          </div>
          {/* // image two */}
          <div
            data-aos-delay="1000"
            data-aos="fade-right"
            className="bg-[rgb(21,16,48)] p-5 rounded-2xl sm:w-[360px] w-full"
          >
            <div className="relative w-full h-[230px]">
              <img
                src="/assets/gate.png"
                className="w-full h-full object-cover rounded-2xl"
                alt="project mage"
              />
            </div>
            <div className="mt-5">
              <h2 className="text-white font-bold text-[24px]">Gate.io</h2>
              <p className="mt-2 text-[rgb(170,166,195)] text-[14px]">
                {" "}
                Leading cryptocurrency exchange with over 1400+ cryptocurrencies
                & stablecoins such as Bitcoin ✓ Ethereum ✓ Dogecoin ✓
              </p>
            </div>
          </div>
          {/* // image three */}
          <div
            data-aos-delay="1000"
            data-aos="zoom-in-up"
            className="bg-[rgb(21,16,48)] p-5 rounded-2xl sm:w-[360px] w-full"
          >
            <div className="relative w-full h-[230px]">
              <img
                src="/assets/tripguide.png"
                className="w-full h-full object-cover rounded-2xl"
                alt="project mage"
              />
            </div>
            <div className="mt-5">
              <h2 className="text-white font-bold text-[24px]">Bitmart</h2>
              <p className="mt-2 text-[rgb(170,166,195)] text-[14px]">
                {" "}
                BitMart - The most trusted cryptocurrency trading platform which
                provides real-time trading services, including Bitcoin (BTC),
                Ethereum (ETH), and Tether{" "}
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Listing;
