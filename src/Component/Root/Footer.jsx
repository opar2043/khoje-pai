import React from "react";
import img from "../../assets/khojepai.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="bg-gradient-to-r from-green-100 via-green-50 to-green-100 text-gray-700 py-3 px-4 md:px-16">
        <div className="flex pb-4 flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and Brand Info */}
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <img src={img} alt="Khoje Pai Logo" className="w-24 md:w-36" />
            <div>
              <p className="text-sm text-green-600 font-medium">
                Your Trusted Stall Finder
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-2xl">
            <Link className="text-blue-600 hover:text-green-800 transition-colors duration-300">
              <FaFacebook />
            </Link>
            <Link className="text-pink-500 hover:text-pink-700 transition-colors duration-300">
              <FaInstagram />
            </Link>
          </div>
        </div>
        <p className="text-center w-4/5 mx-auto  text-sm text-green-600 border-t border-green-300 pt-5">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-green-700">Khoje Pai</span>. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
