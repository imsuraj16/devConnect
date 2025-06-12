import React from "react";
import { useForm } from "react-hook-form";
import { addProject } from "../store/actions/projectActions";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const Addproject = () => {
  const currentUserId = useSelector((state) => state.user.currentUserId);
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const addProjectHandler = (projectData) => {
    
    projectData.id = nanoid()
    projectData.ownerId = currentUserId

    dispatch(addProject(projectData));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Project</h2>
      <form onSubmit={handleSubmit(addProjectHandler)} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Project Title
          </label>
          <input
            type="text"
            placeholder="DevConnect Website"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("title")}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            rows="3"
            placeholder="A social platform for developers to connect and share projects."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("description")}
          ></textarea>
        </div>

        {/* Technologies */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Technologies (comma separated)
          </label>
          <input
            type="text"
            placeholder="React, Redux, Axios"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("technologies")}
          />
        </div>

        {/* Submit Button (non-functional) */}
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
          Add Project
        </button>
      </form>
    </div>
  );
};

export default Addproject;