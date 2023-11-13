import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footervideo from "./Footvid";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [say, setSay] = useState("");
  return (
    <div className="relative z-0 sm:mb-56 md:mb-0 footee">
      <section
        data-aos-delay="1000"
        data-aos="fade-right"
        className="sm:px-4 px-1.5 sm:py-4 py-2.5 max-w-7xl mx-auto relative z-0"
      >
        <span id="contact">&nbsp;</span>
        <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
          {/* input contact */}
          <div className="flex-[0.75] bg-[rgb(30,25,52)] p-8 rounded-2xl conts">
            <p className="sm:text-[18px] text-[14px] text-[rgb(170,166,195)] uppercase tracking-wider">
              Get in touch
            </p>
            <h3 className="text-white font-black md:text-[60px] sm:text-[40px] text-[30px]">
              Contact.
            </h3>
            <form className="mt-4 flex flex-col gap-2">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4"> Your Name</span>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="what's your good name?"
                  className="bg-[rgb(21,16,48)]  py-4 px-6 placeholder:text-[rgb(170,166,195)]  text-white rounded-lg outline-none border-none font-medium"
                  value={name}
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4"> Your email</span>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="what's your web address?"
                  className="bg-[rgb(21,16,48)]  py-4 px-6 placeholder:text-[rgb(170,166,195)]  text-white rounded-lg outline-none border-none font-medium"
                  value={address}
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  {" "}
                  Your Message
                </span>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setSay(e.target.value)}
                  placeholder="what you want to say? "
                  className="bg-[rgb(21,16,48)]  py-4 px-6 placeholder:text-[rgb(170,166,195)]  text-white rounded-lg outline-none border-none font-medium"
                  value={say}
                />
              </label>
              <button className="bg-[rgb(21,16,48)] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-[#050816]">
                Send
              </button>
            </form>
          </div>
          {/* video */}
          <div data-aos-delay="1000" data-aos="fade-left">
            <Footervideo />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
