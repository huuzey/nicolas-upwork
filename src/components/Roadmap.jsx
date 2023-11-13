import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Roadmap = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className="sm:px-4 px-6 sm:py-4 py-3 max-w-7xl mx-auto relative z-0 ">
      <span id="work">&nbsp;</span>
      <div data-aos="fade-down-right" data-aos-delay="2000" className="mb-16">
        <p className="sm:text-[18px] text-[14px] text-[rgb(170,166,195)] uppercase tracking-wider text-center">
          What we have done & what to do...
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[40px]  text-[30px] text-center mb-4">
          Road Map.
        </h2>
      </div>
      {/* first quarter */}
      <div className="sm:hidden xl:flex relative flex-row">
        <div
          data-aos="fade-right"
          data-aos-delay="2000"
          className="flex w-[36%]  bg-[rgb(29,24,54)] text-[rgb(255, 255, 255)] shadow border-b-4 rounded-b-md relative border-[#ddd] rounded p-4 ml-24  mt-12"
        >
          <div className="poke"></div>
          <div>
            <div>
              <h3 className="text-white text-[24px] font-bold">Quarter 1</h3>
              <p className="text-[rgb(170,166,195)] text-[16px] font-semibold">
                Establishing the Foundation
              </p>
            </div>
            <ul className="mt-1 ml-1 space-y-2 list-disc px-8">
              <li className="text-white text-[14px] pl-1 tracking-wider">
                Project Launch : Release HYPE Meme Token on popular
                decentralized exchanges (DEXs) like Uniswap and PancakeSwap.
              </li>
              <li className="text-white text-[14px] pl-1 tracking-wider">
                Community Building : Establish and nurture a strong and active
                community on social media platforms, including Discord,
                Telegram, and Twitter. Encourage user engagement through
                giveaways, contests, and meme contests.
              </li>
              <li className="text-white text-[14px] pl-1 tracking-wider">
                Audit and Security : Conduct a smart contract audit to ensure
                the security and integrity of the token. Make necessary updates
                and improvements based on audit results.
              </li>
            </ul>
          </div>
        </div>
        <div
          className="mt-8  flex relative flex-col"
          data-aos="zoom-in"
          data-aos-delay="2000"
        >
          <div className="befad"></div>
          <div className="focud rounded-full border-4 flex items-center justify-center ">
            <img
              src="/assets/starbucks.png"
              alt="Establishing the foundation"
              className=" w-7 h-[34px] flex rounded-full   "
            />
          </div>
          <div className="lad"></div>
        </div>
      </div>
      {/* second quarter */}
      <div className="sm:hidden xl:flex relative flex-row justify-end items-center">
        <div
          className="  flex relative flex-col   "
          data-aos="zoom-in"
          data-aos-delay="2000"
        >
          <div className="focum rounded-full border-4 flex items-center justify-center ">
            <img
              src="/assets/tesla.png"
              alt="Establishing the foundation"
              className=" w-7 h-[34px] flex rounded-full   "
            />
          </div>
          <div className="ladr "></div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="2000"
          className="flex w-[36%] bg-[rgb(29,24,54)] text-[rgb(255, 255, 255)]   shadow border-b-4 rounded-b-md relative border-[#ddd] rounded p-4 mr-24  mt-16"
        >
          <div className="pokee"></div>
          <div>
            <div>
              <h3 className="text-white text-[24px] font-bold">Quarter 2</h3>
              <p className="text-[rgb(170,166,195)] text-[16px] font-semibold">
                Enhancing Utility
              </p>
            </div>
            <ul className="mt-1 ml-1 space-y-2 list-disc px-8">
              <li className="text-white text-[14px] pl-1 tracking-wider">
                NFT Integration: Launch the HYPE NFT platform, allowing users to
                create, buy, and trade meme-inspired NFTs. Collaborate with
                popular meme creators to release limited edition NFTs.
              </li>
              <li className="text-white text-[14px] pl-1 tracking-wider">
                Governance Model : Implement a decentralized governance model
                that allows HYPE token holders to vote on proposals and project
                decisions. This enhances community involvement and
                decentralization.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* third quarter */}
      <div className="sm:hidden xl:flex relative flex-row">
        <div
          data-aos="fade-right"
          data-aos-delay="2000"
          className="flex w-[36%] bg-[rgb(29,24,54)] text-[rgb(255, 255, 255)] shadow border-b-4 rounded-b-md relative border-[#ddd] rounded p-4 ml-24  mt-12"
        >
          <div className="poke"></div>
          <div>
            <div>
              <h3 className="text-white text-[24px] font-bold">Quarter 3</h3>
              <p className="text-[rgb(170,166,195)] text-[16px] font-semibold">
                Growth and Expansion
              </p>
            </div>
            <ul className="mt-1 ml-1 space-y-2 list-disc px-8">
              <li className="text-white text-[14px] pl-1 tracking-wider">
                Partnerships and Collaborations : Establish partnerships with
                other meme token projects, meme creators, and crypto influencers
                to cross-promote and expand the HYPE ecosystem.{" "}
              </li>
              <li className="text-white text-[14px] pl-1 tracking-wider">
                Token Burns : Initiate a controlled token burn to reduce the
                token supply and create scarcity, potentially driving up the
                token's value.{" "}
              </li>
            </ul>
          </div>
        </div>
        <div
          className="mt-8  flex relative flex-col"
          data-aos="zoom-in"
          data-aos-delay="2000"
        >
          <div className="befad"></div>
          <div className="focud bg-[rgb(56, 62, 86)] rounded-full border-4 flex items-center justify-center ">
            <img
              src="/assets/shopify.png"
              alt="Establishing the foundation"
              className=" w-7 h-[34px] flex rounded-full   "
            />
          </div>
          <div className="ladm"></div>
        </div>
      </div>
      {/* quarter four */}
      <div className="sm:hidden xl:flex relative flex-row justify-end items-center">
        <div
          className="  flex relative flex-col   "
          data-aos="zoom-in"
          data-aos-delay="2000"
        >
          <div className="focumty rounded-full border-4 flex items-center justify-center ">
            <img
              src="/assets/meta.png"
              alt="Establishing the foundation"
              className=" w-7 h-[34px] flex rounded-full   "
            />
          </div>
          <div className="ladrs "></div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="2000"
          className="flex w-[36%] bg-[rgb(29,24,54)] text-[rgb(255, 255, 255)]   shadow border-b-4 rounded-b-md relative border-[#ddd] rounded p-4 mr-24  mt-16"
        >
          <div className="pokee"></div>
          <div>
            <div>
              <h3 className="text-white text-[24px] font-bold">Quarter 4</h3>
              <p className="text-[rgb(170,166,195)] text-[16px] font-semibold">
                Long-Term Sustainability
              </p>
            </div>
            <ul className="mt-1 ml-1 space-y-2 list-disc px-8">
              <li className="text-white text-[14px] pl-1 tracking-wider">
                DApp Development: Begin the development of HYPE-themed
                decentralized applications (DApps) to further enhance the
                utility of the token. Potential DApps could include meme-related
                games, meme marketplaces, or meme-focused social platforms.{" "}
              </li>
              <li className="text-white text-[14px] pl-1 tracking-wider">
                Charity and Philanthropy : Introduce a mechanism for charitable
                contributions, where a portion of transaction fees or token
                holdings can be donated to causes or charities chosen by the
                community.
              </li>
              <li className="text-white text-[14px] pl-1 tracking-wider">
                Continued Community Growth : Continue to actively engage the
                community and explore avenues for growth, such as more
                giveaways, meme contests, and educational content.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div className="sm:flex flex-col xl:hidden overflow-x-hidden">
        {/* first quarter */}
        <div className="flex justify-center items-center gap-2 relative">
          <div
            data-aos="fade-in"
            data-aos-delay="2000"
            className="flex flex-col items-center justify-between"
          >
            <div className="befadsm"></div>
            <div className="focudsm rounded-full border-4 flex items-center justify-center ">
              <img
                src="/assets/starbucks.png"
                alt="Establishing the foundation"
                className=" w-5 h-[24px] flex rounded-full   "
              />
            </div>
            <div className="ladrsmt"></div>
          </div>
          <div>
            <div
              data-aos="fade-left"
              data-aos-delay="2000"
              className="flex  sm:w-full md:w-1/2  bg-[rgb(29,24,54)] text-[rgb(255, 255, 255)] shadow border-b-4 rounded-b-md relative border-[#ddd] rounded px-1   "
            >
              <div className="pokee"></div>
              <div>
                <div>
                  <h3 className="text-white text-[24px] font-bold">
                    Quarter 1
                  </h3>
                  <p className="text-[rgb(170,166,195)] text-[16px] font-semibold">
                    Establishing the Foundation
                  </p>
                </div>
                <ul className="mt-1 ml-1 space-y-2 list-disc px-8">
                  <li className="text-white text-[14px] pl-1 tracking-wider">
                    Project Launch : Release HYPE Meme Token on popular
                    decentralized exchanges (DEXs) like Uniswap and PancakeSwap.
                  </li>
                  <li className="text-white text-[14px] pl-1 tracking-wider">
                    Community Building : Establish and nurture a strong and
                    active community on social media platforms, including
                    Discord, Telegram, and Twitter. Encourage user engagement
                    through giveaways, contests, and meme contests.
                  </li>
                  <li className="text-white text-[14px] pl-1 tracking-wider">
                    Audit and Security : Conduct a smart contract audit to
                    ensure the security and integrity of the token. Make
                    necessary updates and improvements based on audit results.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* second quarter */}
        <div className="flex justify-center items-center gap-2">
          <div
            data-aos="fade-in"
            data-aos-delay="2000"
            className="flex flex-col items-center justify-between"
          >
            <div className="focudsmlr rounded-full border-4 flex items-center justify-center ">
              <img
                src="/assets/tesla.png"
                alt="Establishing the foundation"
                className=" w-5 h-[24px] flex rounded-full   "
              />
            </div>
            <div className="ladraf"></div>
          </div>
          <div>
            <div
              data-aos="fade-left"
              data-aos-delay="2000"
              className="flex sm:w-full md:w-1/2  bg-[rgb(29,24,54)] text-[rgb(255, 255, 255)] shadow border-b-4 rounded-b-md relative border-[#ddd] rounded p-1   "
            >
              <div className="pokee"></div>
              <div>
                <div>
                  <h3 className="text-white text-[24px] font-bold">
                    Quarter 2
                  </h3>
                  <p className="text-[rgb(170,166,195)] text-[16px] font-semibold">
                    Enhancing Utility
                  </p>
                </div>
                <ul className="mt-1 ml-1 space-y-2 list-disc px-8">
                  <li className="text-white text-[14px] pl-1 tracking-wider">
                    NFT Integration: Launch the HYPE NFT platform, allowing
                    users to create, buy, and trade meme-inspired NFTs.
                    Collaborate with popular meme creators to release limited
                    edition NFTs.{" "}
                  </li>
                  <li className="text-white text-[14px] pl-1 tracking-wider">
                    Governance Model : Implement a decentralized governance
                    model that allows HYPE token holders to vote on proposals
                    and project decisions. This enhances community involvement
                    and decentralization.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* third quarter */}
        <div className="flex justify-center items-center gap-2">
          <div
            data-aos="fade-in"
            data-aos-delay="2000"
            className="flex flex-col items-center justify-between"
          >
            <div className="focudsm rounded-full border-4 flex items-center justify-center ">
              <img
                src="/assets/shopify.png"
                alt="Establishing the foundation"
                className=" w-5 h-[24px] flex rounded-full   "
              />
            </div>
            <div className="ladraf"></div>
          </div>
          <div>
            <div
              data-aos="fade-left"
              data-aos-delay="2000"
              className="flex sm:w-full md:w-1/2  bg-[rgb(29,24,54)] text-[rgb(255, 255, 255)] shadow border-b-4 rounded-b-md relative border-[#ddd] rounded p-1   "
            >
              <div className="pokee"></div>
              <div>
                <div>
                  <h3 className="text-white text-[24px] font-bold">
                    Quarter 3
                  </h3>
                  <p className="text-[rgb(170,166,195)] text-[16px] font-semibold">
                    Growth and Expansion
                  </p>
                </div>
                <ul className="mt-1 ml-1 space-y-2 list-disc px-8">
                  <li className="text-white text-[14px] pl-1 tracking-wider">
                    Partnerships and Collaborations : Establish partnerships
                    with other meme token projects, meme creators, and crypto
                    influencers to cross-promote and expand the HYPE ecosystem.
                  </li>
                  <li className="text-white text-[14px] pl-1 tracking-wider">
                    Governance Model : Implement a decentralized governance
                    model that allows HYPE token holders to vote on proposals
                    and project decisions. This enhances community involvement
                    and decentralization.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* fourth quarter */}
        <div className="flex justify-center items-center gap-2">
          <div
            data-aos="fade-in"
            data-aos-delay="2000"
            className="flex flex-col items-center justify-between"
          >
            <div className="focudsmlr rounded-full border-4 flex items-center justify-center ">
              <img
                src="/assets/meta.png"
                alt="Establishing the foundation"
                className=" w-5 h-[24px] flex rounded-full   "
              />
            </div>
            <div className="ladrsmet"></div>
          </div>
          <div>
            <div
              data-aos="fade-left"
              data-aos-delay="2000"
              className="flex sm:w-full md:w-1/2  bg-[rgb(29,24,54)] text-[rgb(255, 255, 255)] shadow border-b-4 rounded-b-md relative border-[#ddd] rounded p-1   "
            >
              <div className="pokee"></div>
              <div>
                <div>
                  <h3 className="text-white text-[24px] font-bold">
                    Quarter 4
                  </h3>
                  <p className="text-[rgb(170,166,195)] text-[16px] font-semibold">
                    Long-term Sustainability
                  </p>
                </div>
                <ul className="mt-1 ml-1 space-y-2 list-disc px-8">
                  <li className="text-white text-[14px] pl-1 tracking-wider">
                    DApp Development: Begin the development of HYPE-themed
                    decentralized applications (DApps) to further enhance the
                    utility of the token. Potential DApps could include
                    meme-related games, meme marketplaces, or meme-focused
                    social platforms.
                  </li>
                  <li className="text-white text-[14px] pl-1 tracking-wider">
                    Charity and Philanthropy : Introduce a mechanism for
                    charitable contributions, where a portion of transaction
                    fees or token holdings can be donated to causes or charities
                    chosen by the community.
                  </li>
                  <li className="text-white text-[14px] pl-1 tracking-wider">
                    Continued Community Growth : Continue to actively engage the
                    community and explore avenues for growth, such as more
                    giveaways, meme contests, and educational content.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
