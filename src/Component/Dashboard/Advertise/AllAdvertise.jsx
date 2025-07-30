import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
const AllAdvertise = () => {
  const [stalls, setStalls] = useState([]);

  useEffect(() => {
    fetch("/stall.json")
      .then((res) => res.json())
      .then((data) => setStalls(data))
      .catch((err) => console.error(err));
  }, []);

  const axiosSecure = useAxios();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/stalls/${id}`)
          .then((res) => {
            if (res.data?.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete. Try again.",
                icon: "error",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong.",
              icon: "error",
            });
            console.error("Delete error:", err);
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-10 drop-shadow">
          🏪 All Advertised Stalls
        </h2>

        <div className="overflow-x-auto rounded-xl shadow-2xl bg-white p-6">
          {stalls.length > 0 ? (
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase">
                    #
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase">
                    Store Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase">
                    Owner
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase">
                    Phone
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-sm">
                {stalls.map((stall, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-blue-50 transition duration-200"
                  >
                    <td className="px-6 py-4 text-gray-600 font-medium">
                      {idx + 1}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {stall.stallName}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{stall.name}</td>
                    <td className="px-6 py-4 text-gray-700">{stall.number}</td>
                    <td className="px-6 py-4 text-gray-700 flex items-center gap-1">
                      <Link to={`/dashboard/edit/${stall._id}`}>
                        <button className="btn btn-sm">
                          <FaEdit></FaEdit>
                        </button>
                      </Link>
                      <Link to={`/stall/${stall._id}`}>
                        <button className="btn btn-sm ">
                          <AiOutlineEye></AiOutlineEye>
                        </button>
                      </Link>
                      <button
                        className="btn btn-sm text-red-500"
                        onClick={() => handleDelete(stall._id)}
                      >
                        <FaTrash></FaTrash>
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-500">No stalls available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllAdvertise;
