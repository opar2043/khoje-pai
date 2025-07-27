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
      <div className="w-full shadow-lg h-[350px] hover:scale-[1.05] transition-all duration-300 overflow-hidden rounded-md relative cursor-pointer group border border-t">
        {/* Overlay Top */}
        <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 text-white z-10">
          <span className="text-sm bg-black/40 px-2 py-1 rounded flex items-center gap-2">
            <FaStore className="text-lg text-orange-400 transition " />

            {category}
          </span>

          <div className="flex items-center gap-1 text-sm bg-black/40 px-2 py-1 rounded">
            <MdOutlineTimer className="text-orange-400" />
            <span>{opening}</span>
          </div>
        </div>

        {/*  image  */}
        <img
          src={image}
          alt="animated_card"
          className="w-full h-[60%] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-300 ease-out"
        />

        {/*  texts  */}
        <div className="absolute bottom-0 left-0 py-[20px] pb-[40px] px-[20px] w-full">
          <p className="text-[1rem] dark:text-black uppercase text-gray-600">
            ৳ {price}
          </p>
          <h3 className="text-[1.4rem] dark:text-black font-bold text-gray-900">
            {stallName}
          </h3>
          <p className="text-[0.9rem] dark:text-black/90 text-gray-600 mt-2">
            - {name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
