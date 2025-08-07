import React from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/khojepai.png";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, handleLogout } = useAuth();
  const navigate = useNavigate();

  function logOut() {
    handleLogout()
      .then(() => {
        Swal.fire({
          title: "Logout Successful",
          icon: "success",
        });
        navigate("/");
      })
      .catch(() => {
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
    <div className="bg-white shadow-md px-4 md:px-12 py-3 w-full">
      <div className="flex items-center justify-between w-full">
        {/* ✅ Logo */}
        <Link to="/" className="w-full">
          <img src={img} alt="Khoje Pai Logo" className="w-60 md:w-72" />
        </Link>

        {/* ✅ Avatar Drawer */}
        <div className="drawer drawer-end  justify-end">
          <input id="avatar-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* ✅ Button to open drawer */}
            <label htmlFor="avatar-drawer" className="cursor-pointer">
              <div className="w-12 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  className="rounded-full"
                />
              </div>
            </label>
          </div>

          <div className="drawer-side z-50">
            <label htmlFor="avatar-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-2">
              {link}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
