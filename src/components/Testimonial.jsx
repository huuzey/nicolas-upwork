import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="sm:px-4 px-1.5 sm:py-4 py-2.5 max-w-7xl mx-auto relative z-0">
      <span>&nbsp;</span>
      <div className="mt-4 bg-[rgb(17,15,26)] rounded-[20px]">
        {/* testimonias header */}
        <div
          data-aos-delay="1000"
          data-aos="fade-down-right"
          className="bg-[rgb(21,16,48)] rounded-2xl sm:px-4 px-1.5 sm:py-4 py-2.5 min-h-[300px]"
        >
          <div>
            <p className="sm:text-[14px] text-[14px] text-[rgb(170,166,195)] uppercase tracking-wider">
              What others say
            </p>
            <h2 className="text-white font-black md:text-[60px] sm:text-[30px]  text-[30px]">
              Testimonials.
            </h2>
          </div>
        </div>
        {/* testimonias card */}
        <div className="-mt-20 pb-14 sm:px-16 px-6 flex flex-wrap gap-7">
          {/* card one  */}
          <div
            data-aos-delay="1000"
            data-aos="flip-down"
            className="bg-[rgb(21,18,41)]  p-10 rounded-3xl sm:w-[320px] w-full"
          >
            <p className="text-white font-black text-[48px]"></p>
            <div className="mt-1">
              <p className="text-white tracking-wider text-[18px]">
                HYPE Meme Token is more than just a digital currency; it's a
                vibrant and welcoming community. From the moment I joined, I was
                greeted with open arms by fellow HYPE enthusiasts who shared my
                passion for cryptocurrency and meme culture. The sense of
                camaraderie and shared humor is something that sets HYPE apart.
              </p>
              <div className="mt-7 flex justify-between items-center gap-1">
                <div className="flex flex-col flex-1">
                  <p className="text-white font-medium text-[16px]">
                    {" "}
                    <span className="atp">@</span>Sara Lee
                  </p>
                  <p className="mt-1 text-[rgb(170,166,195)] text-[12px]">
                    CFO of Acme Co
                  </p>
                </div>
                <img
                  src="https://randomuser.me/api/portraits/women/4.jpg"
                  className="w-10 h-10 rounded-full object-cover"
                  alt="coo"
                />
              </div>
            </div>
          </div>
          {/* card two  */}

          <div
            data-aos-delay="1000"
            data-aos="flip-down"
            className="bg-[rgb(21,18,41)]  p-10 rounded-3xl sm:w-[320px] w-full"
          >
            <p className="text-white font-black text-[48px]"></p>
            <div className="mt-1">
              <p className="text-white tracking-wider text-[18px]">
                HYPE Meme Token is more than just a digital currency; it's a
                vibrant and welcoming community. From the moment I joined, I was
                greeted with open arms by fellow HYPE enthusiasts who shared my
                passion for cryptocurrency and meme culture. The sense of
                camaraderie and shared humor is something that sets HYPE apart.
              </p>
              <div className="mt-7 flex justify-between items-center gap-1">
                <div className="flex flex-col flex-1">
                  <p className="text-white font-medium text-[16px]">
                    {" "}
                    <span className="atp">@</span>Chris Brown
                  </p>
                  <p className="mt-1 text-[rgb(170,166,195)] text-[12px]">
                    COO of DEF Corp
                  </p>
                </div>
                <img
                  src="https://randomuser.me/api/portraits/men/5.jpg"
                  className="w-10 h-10 rounded-full object-cover"
                  alt="feed back by chris brown"
                />
              </div>
            </div>
          </div>
          {/* card three  */}
          <div
            data-aos-delay="1000"
            data-aos="flip-down"
            className="bg-[rgb(21,18,41)]  p-10 rounded-3xl sm:w-[320px] w-full"
          >
            <p className="text-white font-black text-[48px]"></p>
            <div className="mt-1">
              <p className="text-white tracking-wider text-[18px]">
                Holding HYPE Meme Token isn't just about watching numbers go up
                and down. HYPE offers holders the opportunity to earn more
                tokens through reflection rewards. It's a unique incentive that
                encourages long-term holding, which I appreciate as a long-term
                investor.
              </p>
              <div className="mt-7 flex justify-between items-center gap-1">
                <div className="flex flex-col flex-1">
                  <p className="text-white font-medium text-[16px]">
                    {" "}
                    <span className="atp">@</span>Lisa Wang
                  </p>
                  <p className="mt-1 text-[rgb(170,166,195)] text-[12px]">
                    CTO of 456 Enterprises
                  </p>
                </div>
                <img
                  src="https://randomuser.me/api/portraits/women/6.jpg"
                  className="w-10 h-10 rounded-full object-cover"
                  alt="feed back by lisa wang"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
