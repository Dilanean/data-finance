import React from "react";
import Typed from "react-typed";

export const Hero = () => {
  return (
    <div id="home" className="text-white px-3">
      <div className="max-w-[800px] mt-[96px]  w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-light-green font-bold p-2">
          Growing with data analytics
        </p>
        <h1 className=" text-4xl sm:text-5xl md:text-7xl font-bold md:py-6">
          Grow with data
        </h1>
        <div className="flex justify-center items-center">
          <p className="font-bold text-xl sm:text-3xl md:text-4xl py-3 ">
            Use our service to{" "}
          </p>
          <Typed
            className="font-bold text-xl sm:text-3xl md:text-4xl pl-2 sm:pl-3 "
            strings={["STORE", "SHARE", "SYNCHRONIZE"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <button className="bg-light-green w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black lg:hover:bg-slate-500 lg:hover:text-white ease-in-out duration-500">
          Get Started
        </button>
      </div>
    </div>
  );
};
