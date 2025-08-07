import React, { useEffect, useState } from "react";
import Stall from "../Stall/Stall";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  const [dbSearch, setDbSearch] = useState("");



    const [stalls, setStalls] = useState([]);
  
    useEffect(()=>{
      fetch('/stall.json')
        .then(res => res.json())
        .then(data => setStalls(data))
        .catch(err => console.error(err));
    },[]);

  // Fetch data
  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((err) => console.error(err));
  }, []);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDbSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Filter by name field
  const filteredCategory = stalls.filter((item) =>
    item.stallName?.toLowerCase().includes(dbSearch.toLowerCase())
  );

 // console.log(filteredCategory);

  return (
    <div className="px-2 md:px-4">
      {/* Search Bar */}
      <div className="w-full my-4">
        <div className="flex w-full items-center border-2 border-green-500 rounded-lg bg-white px-3">
          <input
            type="text"
            placeholder="Search by Name"
          value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow py-4 px-3 text-sm outline-none w-full"
          />
          <button className="text-white bg-gradient-to-r from-green-500 to-green-600 rounded px-3 py-2 text-xl">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Emergency Button */}
      <div className="flex justify-start my-7">
        <button className="px-5 py-1 rounded font-bold bg-green-500 text-white">
          Emergency
        </button>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-start gap-2">
        {category.map((cat) => (
          <Link to={`/stalls/${cat.name}`} key={cat._id}>
            <button className="btn text-gray-700 font-bold bg-gray-200 hover:bg-gray-300 transition-all duration-300">
              {cat.name}
            </button>
          </Link>
        ))}
      </div>

      {/* Emergency People Section */}
      <div className="my-8">
        <div className="flex justify-start mb-5">
          <button className="px-5 py-1 rounded font-bold bg-green-500 text-white">
            Emergency People
          </button>
        </div>
        <div className="flex flex-wrap justify-start gap-2">
          {category.map((cat) => (
            <Link to={`/stalls/${cat.name}`} key={cat._id}>
              <button className="btn text-gray-700 font-bold bg-gray-200 hover:bg-gray-300 transition-all duration-300">
                {cat.name}
              </button>
            </Link>
          ))}
        </div>
      </div>

     <Stall filteredCategory={filteredCategory} />

    </div>
  );
};

export default Home;
