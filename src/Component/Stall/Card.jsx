import { FaRegHeart } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";
const Card = ({ stall , sub}) => {
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
    _id,
  } = stall;
  
    const path = sub ? `/stalls/${sub}/${_id}` : `/stall/${_id}`;
  return (
<Link to={path}>
  <div className="w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl hover:scale-105 transition-transform duration-300 bg-white relative cursor-pointer group">
    
    {/* Top Overlay */}
    <div className="absolute top-0 left-0 w-full p-3 flex justify-between z-10 text-white">
      <span className="bg-black/50 px-2 py-1 text-xs rounded flex items-center gap-1">
        <FaStore className="text-orange-400" />
        {category}
      </span>
      <span className="bg-black/50 px-2 py-1 text-xs rounded flex items-center gap-1">
        <MdOutlineTimer className="text-orange-400" />
        {opening}
      </span>
    </div>

    {/* Image */}
    <img
      src={image}
      alt={stallName}
      className="w-full h-48 object-cover group-hover:opacity-40 transition-opacity duration-300"
    />

    {/* Content */}
    <div className="p-4">
      <p className="text-gray-900 text-sm ">৳ {price}</p>
      <h3 className="text-lg font-semibold text-gray-900 e">{stallName}</h3>
      <p className="text-sm text-gray-600 mt-1 dark:text-gray-900">– {name}</p>
    </div>

    {/* Button */}
    <div className="px-4 pb-4">
      <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">
        Details
      </button>
    </div>
  </div>
</Link>

  );
};

export default Card;
