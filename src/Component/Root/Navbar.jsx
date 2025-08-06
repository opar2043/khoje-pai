import React, { useEffect, useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/khojepai.png";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, handleLogout } = useAuth();
  // const [search, setSearch] = useState("");
  // const [dbSearch, setDbSearch] = useState("");

  // Handle search input change
  //  useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setDbSearch(search.trim().toLowerCase());
  //   }, 500);
  //   return () => clearTimeout(timer);
  // }, [search]);

  // const filterItem = products.filter(
  //   (item) =>
  //     dbSearch === "" ||
  //     item.name?.toLowerCase().includes(dbSearch) ||
  //     item.category?.toLowerCase().includes(dbSearch)
  // );

  const navigate = useNavigate()
    function logOut() {
    handleLogout()
      .then(() => {
        Swal.fire({
          title: "Logout Successfull",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Try Again",
          icon: "error",
        });
      });
  }
  const link = (
    <>
      <li>
        <Link to="/profile" className="justify-between">
          Profile <span className="badge badge-success">New</span>
        </Link>
      </li>
      <li>
        {user ? (
          <button
            onClick={logOut}
            className="text-gray-700 hover:text-green-500 font-semibold"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="text-gray-700 hover:text-green-500 font-semibold"
          >
            Login
          </Link>
        )}
      </li>
      <li>
        <Link
          to="/dashboard"
          className="text-gray-700 hover:text-green-500 font-semibold"
        >
          Dashboard
        </Link>
      </li>
    </>
  );

  return (
    <div className=" bg-white shadow-md px-4 md:px-12 py-3 w-full">
      {/* ✅ Top row: Logo + Mobile Menu (Mobile only) */}
      <div className="flex items-center justify-between md:hidden w-full ">
        {/* Logo */}

        <Link to="/">
          <img src={img} alt="Khoje Pai Logo" className="w-60" />
        </Link>

        {/* Mobile Drawer */}
        <div className="drawer drawer-end flex justify-end">
          <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="mobile-drawer" className="btn btn-ghost">
              <FaBars size={20} />
            </label>
          </div>
          <div className="drawer-side z-50">
            <label htmlFor="mobile-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-2">
              {link}
            </ul>
          </div>
        </div>
      </div>

      {/* ✅ Mobile: Search Bar full width below */}
      <div className="md:hidden mt-3 mb-2">
        <div className="flex items-center border-2 border-green-500 rounded-lg bg-white px-3 ">
          <input
            type="text"
            placeholder="Search Your Store"
            className="flex-grow py-3 text-sm outline-none"
          />
          <button className="text-white bg-gradient-to-r from-green-500 to-green-600 rounded px-3 py-2 text-xl">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* ✅ Desktop/Tablet layout */}
      <div className="hidden md:flex items-center justify-end gap-6 mt-2">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={img} alt="Khoje Pai Logo" className="w-72" />
        </Link>

        {/* Search bar */}
        <div className="flex flex-grow justify-end">
          <div className="flex items-center border-2 border-green-500 rounded-lg bg-white w-full max-w-xl px-1">
            <input
              type="text"
              placeholder="Search Your Store"
              className="flex-grow py-3 px-2 text-sm outline-none"
            />
            <button className="text-white bg-gradient-to-r from-green-400 to-green-500 rounded px-4 py-2 text-xl">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Avatar (desktop only) */}
        <div className="dropdown dropdown-hover dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn w-14 btn-ghost btn-circle avatar"
          >
            <div className="w-full rounded-full">
              <img
                className="w-full"
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow bg-white rounded-box w-60 border"
          >
            {link}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
