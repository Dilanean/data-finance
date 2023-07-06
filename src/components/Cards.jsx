import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div id="plans" className="w-full py-[10rem] px-4 bg-white text-center">
      <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-20">
        Choose plan that's right for you
      </h2>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h3 className="text-2xl font-bold text-center py-8">One User</h3>
          <p className="text-center text-4xl font-bold">
            $29/<span className="text-gray-500">mo</span>
          </p>
          <div className="text-center font-medium">
            <p className="py-2  mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-light-green w-[200px] rounded-md font-medium my-6 mx-auto py-3  text-black lg:hover:bg-slate-500 lg:hover:text-white ease-in-out duration-500">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-500">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h3 className="text-2xl font-bold text-center py-8">Two Users</h3>
          <p className="text-center text-4xl font-bold">
            $59/<span className="text-gray-500">mo</span>
          </p>
          <div className="text-center font-medium">
            <p className="py-2  mx-8 mt-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8">2 Granted Users</p>
            <p className="py-2 border-b mx-8">Send up to 4 GB</p>
          </div>
          <button className="bg-black text-light-green w-[200px] rounded-md font-medium my-6 mx-auto py-3  lg:hover:bg-slate-500 lg:hover:text-white ease-in-out duration-500">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h3 className="text-2xl font-bold text-center py-8">Three Users</h3>
          <p className="text-center text-4xl font-bold">
            $89/<span className="text-gray-500">mo</span>
          </p>
          <div className="text-center font-medium">
            <p className="py-2  mx-8 mt-8">3TB Storage</p>
            <p className="py-2 border-b mx-8">3 Granted Users</p>
            <p className="py-2 border-b mx-8">Send up to 8 GB</p>
          </div>
          <button className="bg-light-green w-[200px] rounded-md font-medium my-6 mx-auto py-3  text-black lg:hover:bg-slate-500 lg:hover:text-white ease-in-out duration-500">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
