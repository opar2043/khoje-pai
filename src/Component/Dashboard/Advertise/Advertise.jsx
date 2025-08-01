import React, { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";
const img_api_key =
  "https://api.imgbb.com/1/upload?key=188918a9c4dee4bd0453f7ec15042a27";
const Advertise = () => {
  const [service, setService] = useState("Fish");
  const axiosSecure = useAxios()
const handleSubmit = (e) => {
  e.preventDefault();
  const data = e.target;

  const name = data.name.value;
  const stallName = data.stallName.value;
  const address = data.address.value;
  const opening = data.opening.value;
  const number = data.number.value;
  const description = data.description.value;
  const price = data.price.value;
  const category = data.category.value;
  const image = data.image.files[0];

  const formData = new FormData();
  formData.append("image", image);

  fetch(img_api_key, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((imgData) => {
      console.log("Image uploaded:", imgData);

      const stall = {
        name,
        stallName,
        address,
        opening,
        number,
        description,
        price,
        category,
        image: imgData.data.url, // Use uploaded image URL
        service,
      };

      axiosSecure
        .post("/stalls", stall)
        .then((res) => {
          Swal.fire({
            title: "Stall Added!",
            text: "Your stall was successfully added.",
            icon: "success",
          });
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            title: "Something Went Wrong",
            icon: "error",
            draggable: true,
          });
        });

      console.log(stall);
    });

  // data.reset();
};


  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center py-10 px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
            Stall Registration
          </h2>

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
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
              placeholder="e.g. 123 Market Street, Dhaka"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Email & Number */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700">
                Opening Hour
              </label>
              <input
                type="text"
                name="opening"
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
                required
                placeholder="e.g. 017XXXXXXXX"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Price */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Price (Approx.)
              </label>
              <input
                type="number"
                name="price"
                required
                placeholder="e.g. 500"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Category
              </label>
              <select
                name="category"
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
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Upload Stall Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              required
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
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Register Stall
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Advertise;
