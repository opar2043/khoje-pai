import React from "react";
import img from "../../assets/khojepai.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Top Section */}
      <footer className="bg-slate-950 text-white p-10">
        <div className="w-11/12 footer mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <nav>
            <aside className="flex flex-col items-center gap-4">
              <img src={img} alt="Khoje Pai Logo" className="w-44" />
              <div className="text-center">
                <p className="font-bold text-lg">Khoje Pai</p>
                <p className="text-sm text-gray-400">
                  Your Trusted Stall Finder
                </p>
              </div>
            </aside>
          </nav>
          <nav>
            <h6 className="footer-title text-lg font-semibold mb-3">
              Services
            </h6>
            <a className="link link-hover hover:text-green-400 transition-all">
              Stall Booking
            </a>
            <a className="link link-hover hover:text-green-400 transition-all">
              Location Finder
            </a>
            <a className="link link-hover hover:text-green-400 transition-all">
              Vendor Support
            </a>
            <a className="link link-hover hover:text-green-400 transition-all">
              Customer Care
            </a>
          </nav>
          <nav>
            <h6 className="footer-title text-lg font-semibold mb-3">
              Company
            </h6>
            <a className="link link-hover hover:text-green-400 transition-all">
              About us
            </a>
            <a className="link link-hover hover:text-green-400 transition-all">
              Contact
            </a>
            <a className="link link-hover hover:text-green-400 transition-all">
              Careers
            </a>
            <a className="link link-hover hover:text-green-400 transition-all">
              Media
            </a>
          </nav>
          <nav>
            <h6 className="footer-title text-lg font-semibold mb-3">Legal</h6>
            <a className="link link-hover hover:text-green-400 transition-all">
              Terms of use
            </a>
            <a className="link link-hover hover:text-green-400 transition-all">
              Privacy policy
            </a>
            <a className="link link-hover hover:text-green-400 transition-all">
              Cookie policy
            </a>
          </nav>
        </div>
      </footer>

      {/* Bottom Section */}
      <footer className="bg-slate-950 text-white border-t border-gray-700 py-5">
        <div className="w-full flex  items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <p className="text-sm">
              © {new Date().getFullYear()} Khoje Pai — All rights reserved
            </p>
          </div>
          <div className="flex gap-6 text-2xl justify-center">
            <Link
              to="https://facebook.com"
              target="_blank"
              className="hover:text-green-400 transition-all"
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://instagram.com"
              target="_blank"
              className="hover:text-pink-500 transition-all"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
