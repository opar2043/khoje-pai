import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Title from "../Shared/Title";
import Card from "./Card";
import { FaHome } from "react-icons/fa";

const Category = () => {
  const { sub } = useParams();
  const [stalls, setStalls] = useState([]);

  useEffect(() => {
    fetch("/stall.json")
      .then((res) => res.json())
      .then((data) => setStalls(data))
      .catch((err) => console.error(err));
  }, []);

  const filterStore = stalls.filter((stall) => stall.category === sub);

  return (
    <div className="px-4 md:px-10">
      <div className="flex justify-between items-center my-5">
        <Title head={"Our"} head2={`${sub} Stalls`} />
        <Link to={"/"}>
          <button className="btn bg-red-500 text-white hover:bg-red-600 transition-all duration-300">
            <FaHome></FaHome> Back to Home
          </button>
        </Link>
      </div>

      {filterStore.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6">
          {filterStore.map((stall) => (
            <Card key={stall._id} stall={stall} sub={sub} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No stalls found in <strong>{sub}</strong> category.
        </p>
      )}
    </div>
  );
};

export default Category;
