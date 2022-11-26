import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <>
      <div className="text-white max-w-[800] h-screen  flex flex-col text-center  justify-center">
        <p className="uppercase text-[#00df9a] font-medium ">
          Growing with data analytics
        </p>
        <h1 className="capitalize sm:text-5xl md:text-6xl text-5xl font-bold py-2">
          Grow with Data
        </h1>
        <div className="flex justify-center items-center">
          <h3 className="capitalize text-xl font-medium md:text-2xl">
            Fast,flexible Financing for
          </h3>
          <Typed className="capitalize text-xl font-medium pl-2  text-[#00df9a] "
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          ></Typed>
        </div>
        <div className="capitalize text-l md:text-xl text-gray-400 font-medium mt-20">monitor your data analytics to increase revenue from BTB.BTC & SASS Platform</div>
        <button className="capitalize bg-green-400 font-bold mt-8 w-[200px] mx-auto py-3 rounded-md text-white">get started</button>
      </div>

    </>
  );
};

export default Hero;
