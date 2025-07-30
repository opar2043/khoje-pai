import React, { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const img_api_key =
  "https://api.imgbb.com/1/upload?key=188918a9c4dee4bd0453f7ec15042a27";

const Edit = () => {
  const [service, setService] = useState("Fish");
  const axiosSecure = useAxios();
  const { id } = useParams();
  const [stalls, setStalls] = useState([]);

  useEffect(() => {
    fetch("/stall.json")
      .then((res) => res.json())
      .then((data) => setStalls(data))
      .catch((err) => console.error(err));
  }, []);

  const findStall = stalls.find((stall) => stall._id === id);
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
  } = findStall || {};

  const handleEdit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const stallName = form.stallName.value;
    const address = form.address.value;
    const opening = form.opening.value;
    const number = form.number.value;
    const description = form.description.value;
    const price = form.price.value;
    const category = form.category.value;
    const newImage = form.image.files[0];

    const updateStall = (imageUrl) => {
      const stallData = {
        name,
        stallName,
        address,
        opening,
        number,
        description,
        price,
        category,
        image: imageUrl,
        service,
      };

      axiosSecure
        .patch(`/stalls/${id}`, stallData)
        .then(() => {
          Swal.fire({
            title: "Stall Updated!",
            text: "The stall details have been successfully updated.",
            icon: "success",
          });
        })
        .catch((err) => {
          console.error(err);
          Swal.fire({
            title: "Update Failed",
            text: "Something went wrong while updating.",
            icon: "error",
          });
        });
    };

    if (newImage) {
      const formData = new FormData();
      formData.append("image", newImage);

      fetch(img_api_key, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          const imageUrl = imgData?.data?.url;
          updateStall(imageUrl);
        })
        .catch((err) => {
          console.error(err);
          Swal.fire({
            title: "Image Upload Failed",
            text: "Try again later.",
            icon: "error",
          });
        });
    } else {
      updateStall(image); // Use existing image if not changed
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center py-10 px-4">
        <form
          onSubmit={handleEdit}
          className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
            Update Your Stall
          </h2>

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              required
              placeholder="e.g. Rijoan Rashid"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Stall Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Stall Name
            </label>
            <input
              type="text"
              name="stallName"
              required
              defaultValue={stallName}
              placeholder="e.g. Fresh Mart"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Address
            </label>
            <input
              type="text"
              name="address"
              required
              defaultValue={address}
              placeholder="e.g. 123 Market Street, Dhaka"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Opening Hour & Number */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700">
                Opening Hour
              </label>
              <input
                type="text"
                name="opening"
                defaultValue={opening}
                required
                placeholder="e.g. 8am - 10pm"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="number"
                defaultValue={number}
                required
                placeholder="e.g. 017XXXXXXXX"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Price & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Price (Approx.)
              </label>
              <input
                type="number"
                name="price"
                defaultValue={price}
                required
                placeholder="e.g. 500"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
              />
            </div>

{    category &&       <div>
              <label className="block text-sm font-semibold text-gray-700">
                Category
              </label>
              <select
                name="category"
                defaultValue={category}
                required
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
              >
                <option value="">-- Select Category --</option>
                <option value="Electrician">Electrician</option>
                <option value="Tea Stall">Tea Stall</option>
                <option value="Education & Coaching">
                  Education & Coaching
                </option>
                <option value="Doctor">Doctor</option>
                <option value="Grocery">Grocery</option>
                <option value="Plumber">Plumber</option>
                <option value="Tailor">Tailor</option>
                <option value="Mechanic">Mechanic</option>
              </select>
            </div>}
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Upload New Image (optional)
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              defaultValue={description}
              rows="4"
              required
              placeholder="Write something about your stall or the items you sell..."
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 rounded-lg shadow transition-all duration-300"
            >
              Update Stall
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
