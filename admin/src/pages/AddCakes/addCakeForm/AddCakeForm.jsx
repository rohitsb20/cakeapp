"use client";

import { useState } from "react";
import Caketype from "../../../assets/CakeType";
import useAddCake from "../../../hooks/useAddCake";

export default function AddCakeForm() {
  const { additem, loading } = useAddCake();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    image: null,
  });
  const [image, setImage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    setFormData({ ...formData, image: file });
  };

  const handleImageDelete = () => {
    setImage("");
    setFormData({ ...formData, image: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await additem(formData);
    
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Upload Image
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {!image ? (
                  <svg
                    className="mx-auto h-10 w-10 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : null}
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="image"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-pink-600 hover:text-pink-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="image"
                      name="image"
                      type="file"
                      className="sr-only"
                      onChange={handleImageChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
                {image && (
                  <div className="mt-2">
                    <img
                      src={image}
                      alt="Preview"
                      className="h-32 w-32 object-cover mx-auto"
                    />

                    <button
                      onClick={handleImageDelete}
                      className="text-sm text-red-400"
                    >
                      delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm  p-2"
              placeholder="Enter cake title"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description (min 10 characters)
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2  "
              placeholder="Enter cake description"
              minLength={10}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            ></textarea>
            {formData.description.length > 0 &&
              formData.description.length < 10 && (
                <p className="mt-2 text-sm text-red-600">
                  Description must be at least 10 characters long.
                </p>
              )}
          </div>

          <div>
            <label
              htmlFor="cake-type"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              className="mt-1 block w-full rounded-md
               border-gray-300 shadow-sm  p-2 lowercase"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option value="">Select a cake type</option>
              {Caketype.map((cake, index) => (
                <option key={index} value={cake}>
                  {cake}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Price
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">&#8377;</span>
              </div>
              <input
                type="number"
                name="price"
                id="price"
                className="mt-1 block w-full rounded-md border-gray-300 pl-7 pr-12  p-2"
                placeholder="0.00"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm
                         text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
             {loading ? "Adding..." : "Add Cake"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
