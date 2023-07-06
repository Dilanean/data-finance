import React from "react";

const Newsletter = () => {
  return (
    <div id="newsletter" className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 items-center gap-4">
        <div className="lg:col-span-2">
          <h2 className="font-bold text-xl sm:text-3xl md:text-4xl py-2">
            What tips & tricks to optimize yout flow?
          </h2>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center">
            <input
              className="p-3 w-full rounded-md text-black focus:outline focus:outline-3 focus:outline-light-green"
              type="email"
              placeholder="Enter email"
            />
            <button className="bg-light-green w-[200px] rounded-md font-medium my-6 mx-auto sm:ml-4 py-3 text-black lg:hover:bg-slate-500 lg:hover:text-white ease-in-out duration-500">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <a className="text-light-green" href="/">
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
