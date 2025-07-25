import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const link = (
    <>
      <li>
        <Link className="justify-between">
          Profile
          <span className="badge badge-primary">New</span>
        </Link>
      </li>
      <Link
        to={"/login"}
        className="text-gray-700 hover:text-green-500 font-semibold px-2"
      >
        <li>Login</li>
      </Link>
      <Link
        to={"/dashboard"}
        className="text-gray-700 hover:text-green-500 font-semibold px-2 py-2"
      >
        <li>Dashboard</li>
      </Link>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-md px-12 py-4">
      <div className="flex flex-col md:flex-row items-center gap-4 w-full">
        {/* Logo */}
        <div className="flex flex-1 items-center">
          <p className="text-xl md:text-3xl font-bold text-green-500">
            <Link to="/">Khoje Pai</Link>
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl w-full">
          <div className="flex items-center border-4 border-green-500 rounded-lg bg-white px-2 ">
            <input
              type="text"
              placeholder="Search Your Store"
              className="flex-grow px-2 py-3 outline-none placeholder:bg-col text-sm"
            />
            <button className="text-white rounded  bg-green-500 px-3 py-1 font-light text-2xl">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* User Avatar Dropdown */}
        <div className="hidden md:dropdown dropdown-hover dropdown-left">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar ml-4"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
