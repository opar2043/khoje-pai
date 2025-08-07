import { Link, useNavigate } from "react-router-dom";
import registerAnimation from "../../assets/register_animation.json";
import Lottie from "lottie-react";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";
import { useState } from "react";

const Register = () => {
  const { handleRegister } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxios();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegisterEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get form values
      const form = e.target;
      const email = form.email.value;
      const name = form.name.value;
      const pass = form.pass.value;
      const image = form.image.files[0];
      const address = form.adress.value;
      const stallname = form.stallname.value;
      const number = form.number.value;
      const description = form.description.value;

      // Validate required fields
      if (!image) {
        throw new Error("Please upload an image");
      }

      // Upload image to imgBB
      const formData = new FormData();
      formData.append("image", image);
      const imgbbApi = "https://api.imgbb.com/1/upload?key=188918a9c4dee4bd0453f7ec15042a27";

      const imgResponse = await fetch(imgbbApi, {
        method: "POST",
        body: formData,
      });

      if (!imgResponse.ok) {
        throw new Error("Image upload failed");
      }

      const imgData = await imgResponse.json();
      const imageUrl = imgData.data?.display_url || imgData.data?.url;

      if (!imageUrl) {
        throw new Error("Failed to get image URL");
      }

      // Create user object
      const userObj = {
        email,
        name,
        pass,
        role: "stallman",
        description,
        adress: address,
        stallname,
        number,
        image: imageUrl,
      };

      // Register user with Firebase Auth
      const userCredential = await handleRegister(email, pass);

      // Save additional user data to your database
      const dbResponse = await axiosSecure.post("/users", userObj);

      if (dbResponse.data?.insertedId || dbResponse.data?.success) {
        Swal.fire({
          title: "Registered Successfully!",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        form.reset();
        navigate("/");
      } else {
        throw new Error("Failed to save user data");
      }
    } catch (error) {
      console.error("Registration error:", error);
      let errorMessage = "Registration failed. Please try again.";

      if (error.code) {
        switch (error.code) {
          case "auth/email-already-in-use":
            errorMessage = "Email is already in use. Please login instead.";
            break;
          case "auth/weak-password":
            errorMessage = "Password should be at least 6 characters.";
            break;
          case "auth/invalid-email":
            errorMessage = "Please enter a valid email address.";
            break;
          default:
            errorMessage = error.message || errorMessage;
        }
      } else {
        errorMessage = error.message || errorMessage;
      }

      Swal.fire({
        title: "Error",
        text: errorMessage,
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="my-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 px-4">
      <div className="w-full md:w-[50%]">
        <Lottie animationData={registerAnimation} loop={true} />
      </div>

      <form
        onSubmit={handleRegisterEmail}
        className="w-full md:w-[50%] p-6 md:p-10 rounded-md space-y-4 border"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Register As a Stall Owner
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />
          <input
            type="password"
            name="pass"
            placeholder="Password (min 6 characters)"
            className="input input-bordered w-full"
            required
            minLength={6}
          />
          <div>
            <label className="label">
              <span className="label-text">Profile Image</span>
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="file-input file-input-bordered w-full"
              required
            />
          </div>
          <input
            type="text"
            name="adress"
            placeholder="Address"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="stallname"
            placeholder="Stall Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            className="input input-bordered w-full"
            required
          />
          <textarea
            name="description"
            placeholder="Stall Description"
            className="textarea textarea-bordered w-full"
            rows={3}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Register"
          )}
        </button>

        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-blue-500 font-medium" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;