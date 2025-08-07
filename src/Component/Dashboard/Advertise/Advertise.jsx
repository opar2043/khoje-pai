// import React, { useState } from "react";
// import useAxios from "../../Hooks/useAxios";
// import Swal from "sweetalert2";
// const img_api_key =
//   "https://api.imgbb.com/1/upload?key=188918a9c4dee4bd0453f7ec15042a27";
// const Advertise = () => {
//   const [service, setService] = useState("Fish");
//   const axiosSecure = useAxios()
// const handleSubmit = (e) => {
//   e.preventDefault();
//   const data = e.target;

//   const name = data.name.value;
//   const stallName = data.stallName.value;
//   const address = data.address.value;
//   const opening = data.opening.value;
//   const number = data.number.value;
//   const description = data.description.value;
//   const price = data.price.value;
//   const category = data.category.value;
//   const image = data.image.files[0];

//   const formData = new FormData();
//   formData.append("image", image);

//   fetch(img_api_key, {
//     method: "POST",
//     body: formData,
//   })
//     .then((res) => res.json())
//     .then((imgData) => {
//       console.log("Image uploaded:", imgData);

//       const stall = {
//         name,
//         stallName,
//         address,
//         opening,
//         number,
//         description,
//         price,
//         category,
//         image: imgData.data.url, 
//         service,
//       };

//       axiosSecure
//         .post("/stalls", stall)
//         .then((res) => {
//           Swal.fire({
//             title: "Stall Added!",
//             text: "Your stall was successfully added.",
//             icon: "success",
//           });
//         })
//         .catch((err) => {
//           console.log(err);
//           Swal.fire({
//             title: "Something Went Wrong",
//             icon: "error",
//             draggable: true,
//           });
//         });

//       console.log(stall);
//     });

//   // data.reset();
// };


//   return (
//     <div>
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center py-10 px-4">
//         <form
//           onSubmit={handleSubmit}
//           className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl space-y-6"
//         >
//           <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
//             Stall Registration
//           </h2>

//           {/* Name */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700">
//               Your Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               required
//               placeholder="e.g. Rijoan Rashid"
//               className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
//             />
//           </div>

//           {/* Stall Name */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700">
//               Stall Name
//             </label>
//             <input
//               type="text"
//               name="stallName"
//               required
//               placeholder="e.g. Fresh Mart"
//               className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
//             />
//           </div>

//           {/* Address */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700">
//               Address
//             </label>
//             <input
//               type="text"
//               name="address"
//               required
//               placeholder="e.g. 123 Market Street, Dhaka"
//               className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
//             />
//           </div>

//           {/* Email & Number */}
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex-1">
//               <label className="block text-sm font-semibold text-gray-700">
//                 Opening Hour
//               </label>
//               <input
//                 type="text"
//                 name="opening"
//                 required
//                 placeholder="e.g. 8am - 10pm"
//                 className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-sm font-semibold text-gray-700">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 name="number"
//                 required
//                 placeholder="e.g. 017XXXXXXXX"
//                 className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* Price */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700">
//                 Price (Approx.)
//               </label>
//               <input
//                 type="number"
//                 name="price"
//                 required
//                 placeholder="e.g. 500"
//                 className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
//               />
//             </div>

//             {/* Category */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700">
//                 Category
//               </label>
//               <select
//                 name="category"
//                 required
//                 className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
//               >
//                 <option value="">-- Select Category --</option>
//                 <option value="Electrician">Electrician</option>
//                 <option value="Tea Stall">Tea Stall</option>
//                 <option value="Education & Coaching">
//                   Education & Coaching
//                 </option>
//                 <option value="Doctor">Doctor</option>
//                 <option value="Grocery">Grocery</option>
//                 <option value="Plumber">Plumber</option>
//                 <option value="Tailor">Tailor</option>
//                 <option value="Mechanic">Mechanic</option>
//               </select>
//             </div>
//           </div>

//           {/* Image Upload */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700">
//               Upload Stall Image
//             </label>
//             <input
//               type="file"
//               name="image"
//               accept="image/*"
//               required
//               className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700">
//               Description
//             </label>
//             <textarea
//               name="description"
//               rows="4"
//               required
//               placeholder="Write something about your stall or the items you sell..."
//               className="w-full mt-1 p-3 border border-gray-300 rounded-lg resize-none"
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-blue-700 transition"
//             >
//               Register Stall
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Advertise;




import React, { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";

const img_api_key = "https://api.imgbb.com/1/upload?key=188918a9c4dee4bd0453f7ec15042a27";

const Advertise = () => {
  const [service, setService] = useState("Fish");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const axiosSecure = useAxios();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
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
        const stall = {
          name,
          stallName,
          address,
          opening,
          number,
          description,
          price,
          category,
          image: imgData.data.url,
          service,
        };

        return axiosSecure.post("/stalls", stall);
      })
      .then((res) => {
        Swal.fire({
          title: "Success!",
          text: "Your stall was successfully added.",
          icon: "success",
          confirmButtonColor: "#4f46e5",
        });
        data.reset();
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          title: "Error",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonColor: "#4f46e5",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-400 to-indigo-500 p-6 text-white">
            <h2 className="text-3xl font-bold text-center">Register Your Stall</h2>
            <p className="text-center text-white mt-2">
              Join our marketplace and reach more customers
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Rijoan Rashid"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>

              {/* Stall Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stall Name
                </label>
                <input
                  type="text"
                  name="stallName"
                  required
                  placeholder="e.g. Fresh Mart"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                required
                placeholder="e.g. 123 Market Street, Dhaka"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Opening Hour */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Opening Hours
                </label>
                <input
                  type="text"
                  name="opening"
                  required
                  placeholder="e.g. 8am - 10pm"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="number"
                  required
                  placeholder="e.g. 017XXXXXXXX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price (Approx.)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">৳</span>
                  <input
                    type="number"
                    name="price"
                    required
                    placeholder="e.g. 500"
                    className="w-full pl-8 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  name="category"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition appearance-none"
                >
                  <option value="">-- Select Category --</option>
                  <option value="Electrician">Electrician</option>
                  <option value="Tea Stall">Tea Stall</option>
                  <option value="Education & Coaching">Education & Coaching</option>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Stall Image
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col w-full border-2 border-dashed border-gray-300 hover:border-indigo-500 hover:bg-indigo-50 rounded-lg cursor-pointer transition">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG, JPEG (MAX. 5MB)</p>
                  </div>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    required
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                rows="4"
                required
                placeholder="Write something about your stall or the items you sell..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-[1.01] ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Register Stall"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Advertise;