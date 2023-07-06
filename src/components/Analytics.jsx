import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div id="company" className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] my-4  mx-auto"
          src={Laptop}
          alt="laptop img"
        />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-light-green font-bold">
            Data Analytics Dashboard
          </p>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl py-2">
            Manage Data Analytics Centrally
          </h2>
          <p>
            We create astounding products powered by machine learning and data
            analysis. We are committed to helping our global customers succeed
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0 text-light-green lg:hover:bg-slate-500 lg:hover:text-white ease-in-out duration-500">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
