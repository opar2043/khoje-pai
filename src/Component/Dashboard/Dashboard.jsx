import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaAd, FaStore, FaListAlt } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="md:w-64 w-full bg-gradient-to-b from-green-400 via-green-500 to-green-700 text-white p-6 space-y-6 shadow-lg">
        <div className="flex items-center justify-center gap-3 mb-6">
          <img
            src="/public/Potato-logo-sqr png.png"
            alt="Logo"
            className="h-10 w-10 object-cover rounded-full border-2 border-white"
          />
          <h2 className="text-2xl font-bold">Dashboard</h2>
        </div>

        <ul className="space-y-2 text-base">
          <li>
            <Link
              to="/dashboard/advertise"
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-green-600 transition-all"
            >
              <FaAd size={20} /> <span>Advertise</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/all-advertise"
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-green-600 transition-all"
            >
              <FaListAlt size={20} /> <span>All Advertise</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/all-store"
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-green-600 transition-all"
            >
              <FaStore size={20} /> <span>All Store</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition-all"
            >
              <AiOutlineHome size={20} /> <span>Back to Home</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
