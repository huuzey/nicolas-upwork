import React from "react";

const Team = () => {
  return (
    <div className="md:mx-20 sm:mx-4 lg:mx-32 border-l-2 border-t-2 mt-11      rounded-md border-b-2 border-green-700">
      <div className="flex flex-col my-2 sm:mx-1 lg:mx-2">
        <h1 className="ml-10 mt-4 text-green-700 text-3xl font-bold">Team</h1>
        <p className="text-white ml-10 mt-3">
          We are a team of skilled, hard-working, ambitious builders with a
          common goal-to deliver the premiere{" "}
          <a href="/pulschain" className="underline font-semibold">
            PulseChain
          </a>{" "}
          NFT app.
        </p>
        <div className="grid grid-cols-3 sm:gap-1 md:gap-2 lg:gap-3 xl:gap-4 items-center justify-between mt-16 ">
          <div className="flex flex-col gap-1 items-center justify-center mb-20">
            <img
              src="https://www.mintra.ai/img/avatar/Gerardo.jpg"
              alt=""
              className="md:w-[25%] md:h-[25%] sm:h-[40%]  sm:w-[40%] object-contain rounded-md"
            />

            <h1 className="text-green-600 font-bold">Gerardo</h1>
            <p className="text-gray-400 font-sans text-xs font-medium">
              Founder
            </p>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center mb-20">
            <img
              src="https://www.mintra.ai/img/avatar/Paul.jpg"
              alt=""
              className="md:w-[25%] md:h-[25%] sm:h-[40%]  sm:w-[40%] object-contain rounded-md"
            />{" "}
            <h1 className="text-green-600 font-bold">Gamesys</h1>
            <p className="text-gray-400 font-sans text-xs font-medium">CIO</p>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center mb-20">
            <img
              src="https://www.mintra.ai/img/avatar/Gamesys.jpg"
              alt=""
              className="md:w-[25%] md:h-[25%] sm:h-[40%]  sm:w-[40%] object-contain rounded-md"
            />
            <h1 className="text-green-600 font-bold">Pual</h1>
            <p className="text-gray-400 font-sans text-xs font-medium">CTO</p>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center mb-20">
            <img
              src="https://www.mintra.ai/img/avatar/Sajad.jpg"
              alt=""
              className="md:w-[25%] md:h-[25%] sm:h-[40%]  sm:w-[40%] object-contain rounded-md"
            />
            <h1 className="text-green-600 font-bold">Sajad</h1>
            <p className="text-gray-400 font-sans text-xs font-medium">
              Front-end
            </p>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center mb-20">
            <img
              src="https://www.mintra.ai/img/avatar/Dan.jpg"
              alt=""
              className="md:w-[25%] md:h-[25%] sm:h-[40%]  sm:w-[40%] object-contain rounded-md"
            />
            <h1 className="text-green-600 font-bold">Dima</h1>
            <p className="text-gray-400 font-sans text-xs font-medium">
              Front-end
            </p>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center mb-20">
            <img
              src="https://www.mintra.ai/img/avatar/Dima.jpg"
              alt=""
              className="md:w-[25%] md:h-[25%] sm:h-[40%]  sm:w-[40%] object-contain rounded-md"
            />
            <h1 className="text-green-600 font-bold">Dan</h1>
            <p className="text-gray-400 font-sans text-xs font-medium">
              Backend
            </p>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center mb-20">
            <img
              src="https://www.mintra.ai/img/avatar/Susan.jpg"
              alt=""
              className="md:w-[25%] md:h-[25%] sm:h-[40%]  sm:w-[40%] object-contain rounded-md"
            />
            <h1 className="text-green-600 font-bold">Susan</h1>
            <p className="text-gray-400 font-sans text-xs font-medium">
              Strategy
            </p>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center mb-20">
            <img
              src="https://www.mintra.ai/img/avatar/Tyler.jpg"
              alt=""
              className="md:w-[25%] md:h-[25%] sm:h-[40%]  sm:w-[40%] object-contain rounded-md"
            />
            <h1 className="text-green-600 font-bold">Tyler</h1>
            <p className="text-gray-400 font-sans text-xs font-medium">
              Marketing
            </p>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center mb-20">
            <img
              src="https://www.mintra.ai/img/avatar/Gopal.jpg"
              alt=""
              className="md:w-[25%] md:h-[25%] sm:h-[40%]  sm:w-[40%] object-contain rounded-md"
            />
            <h1 className="text-green-600 font-bold">Gopal</h1>
            <p className="text-gray-400 font-sans text-xs font-medium">
              Design
            </p>
          </div>
        </div>
        <p className="text-white ml-10 my-6">
          A special thanks to the silent heroes that helped make mintra
          possible:CoinFabrik, Aure, Yesmine, Mana, Hicham, Aspect, MunkMade,
          ProfitOriginals, Josh, Chris, Jeff, Phillip, and many more.
        </p>
      </div>
    </div>
  );
};

export default Team;
