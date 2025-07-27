import React, { useEffect, useState } from "react";
import Title from "../Shared/Title";
import Stall from "../Stall/Stall";

const Home = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <div className="flex justify-start my-7">
        <button className="px-5 py-1 rounded font-bold bg-green-500 text-white ">
          Emergency
        </button>
      </div>
      <div className="md:flex md:flex-wrap grid grid-cols-2 justify-center  gap-2">
        {category &&
          category.map((cat) => (
            <button
              className="btn  text-gray-700 font-bold bg-gray-200 hover:bg-gray-300  transition-all duration-300"
              key={cat.id}
            >
              {cat.name}
            </button>
          ))}
      </div>

      <div className="my-8">
        <div className="flex justify-start mb-5">
          <button className="px-5 py-1 rounded font-bold bg-green-500 text-white ">
            Emergency People
          </button>
        </div>
        <div className="md:flex md:flex-wrap grid grid-cols-2 justify-center  gap-2">
          {category &&
            category.map((cat) => (
              <button
                className="btn  text-gray-700 font-bold bg-gray-200 hover:bg-gray-300  transition-all duration-300"
                key={cat.id}
              >
                {cat.name}
              </button>
            ))}
        </div>
      </div>
      <Stall></Stall>
    </div>
  );
};

export default Home;
