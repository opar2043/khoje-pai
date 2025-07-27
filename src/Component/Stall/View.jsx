import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaStar,
  FaHeart,
  FaRegHeart,
  FaCoins,
  FaHome,
  FaCopy,
} from "react-icons/fa";
import Swal from "sweetalert2";
import {
  FaUserTie,
  FaTags,
  FaTools,
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
} from "react-icons/fa";
const View = () => {
  const { id } = useParams();
  const [stalls, setStalls] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    fetch("/stall.json")
      .then((res) => res.json())
      .then((data) => setStalls(data))
      .catch((err) => console.error(err));
  }, []);

  const stall = stalls.find((stall) => stall._id === id);
  const {
    name,
    stallName,
    address,
    opening,
    number,
    description,
    price,
    category,
    image,
    service,
  } = stall || {};

  if (!stall) {
    return <div className="text-center py-10">Loading stall details...</div>;
  }

  function handleCopy() {
    navigator.clipboard.writeText(` ${number} `);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Number Copied",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <div className="mx-auto md:px-8 md:py-12">
      <div className="p-3 rounded-md grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 shadow-md">
        {/* Image Section */}
        <div className="space-y-4 relative group">
          {/* Image container */}
          <div className="aspect-square w-full md:w-5/6 overflow-hidden rounded-xl  relative">
            <img
              src={image}
              alt={stallName}
              className=" w-full h-full object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
            />

            {/* Category badge */}
            <span className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              {category}
            </span>
          </div>
        </div>

        {/* Details Section */}
        <div className="flex  items-center">
          <div className="space-y-3 ">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              {stallName}
            </h1>
            <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
              {description
                ?.split(".")
                .filter((sentence) => sentence.trim() !== "")
                .map((sentence, index) => (
                  <li key={index}>{sentence.trim()}.</li>
                ))}
            </ul>

            <div className="space-y-3 text-sm text-gray-700 bg-gray-50 py-5 px-1 rounded-lg grid grid-cols-2">
              <div className="flex items-center gap-2">
                <FaUserTie className="text-green-600" />
                <p>
                  <span className="font-semibold">Owner:</span> {name}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaTags className="text-blue-600" />
                <p>
                  <span className="font-semibold">Category:</span> {category}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaTools className="text-purple-600" />
                <p>
                  <span className="font-semibold">Service:</span> {service}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-600" />
                <p>
                  <span className="font-semibold">Address:</span> {address}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-orange-600" />
                <p>
                  <span className="font-semibold">Opening Hours:</span>{" "}
                  {opening}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-gray-600" />
                <p>
                  <span className="font-semibold">Phone:</span> {number}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xl text-gray-800 font-medium pt-2">
              <FaCoins></FaCoins> ৳ {price}
            </div>

            <div className="flex  gap-4 items-center pt-4"></div>
            <div className="flex flex-col md:flex-row gap-2">
              <button
                onClick={handleCopy}
                className="w-full px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 flex items-center justify-center gap-2"
              >
                <FaCopy></FaCopy> Copy Phone Number
              </button>
              <div className="w-full">
                <Link to={"/"}>
                  <button className="w-full px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 flex items-center justify-center gap-2">
                    <FaHome></FaHome> Back To Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
