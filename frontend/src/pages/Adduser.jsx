import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { addUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
const Adduser = () => {

const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const addUserHandler = (userdata) => {
    userdata.id = nanoid();
    dispatch(addUser(userdata));
    // console.log(userdata);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add User</h2>
      <form onSubmit={handleSubmit(addUserHandler)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Suraj Kumar"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("fullName")}
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="suraj@example.com"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email")}
          />
        </div>

        {/* Skills Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Skills (comma separated)
          </label>
          <input
            type="text"
            placeholder="React, JavaScript, CSS"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("skills")}
          />
        </div>

        {/* Bio Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bio
          </label>
          <textarea
            rows="3"
            placeholder="Frontend developer passionate about building cool apps."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("bio")}
          ></textarea>
        </div>

        {/* Submit Button (non-functional) */}
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
          Add User
        </button>
      </form>
    </div>
  );
};

export default Adduser;
