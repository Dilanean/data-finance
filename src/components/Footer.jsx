import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div
        id="footer"
        className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300"
      >
        <div>
          <h1 className="w-full text-3xl font-bold text-light-green">DATA.</h1>
          <p className="py-4">
            With employess located in over 30 countries, our support teams are
            available 24/7, worldwide. Our global presence enables us to provide
            peerless support and availability, assisting customers all over the
            world
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>

        <div className="flex lg:col-span-2 justify-between">
          <div>
            <h6 className="font-medium text-gray-400 mb-2">Solutions</h6>
            <ul>
              <li className="py-2 text-sm">Analytics</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Commerce</li>
              <li className="py-2 text-sm">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400 mb-2">Support</h6>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Documentation</li>
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400 mb-2">Company</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Jobs</li>
              <li className="py-2 text-sm">Press</li>
              <li className="py-2 text-sm">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400 mb-2">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Claims</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-light-green text-black text-center">
        <p>&copy; 2023 Created by Arman Dilanean</p>
      </div>
    </>
  );
};

export default Footer;
