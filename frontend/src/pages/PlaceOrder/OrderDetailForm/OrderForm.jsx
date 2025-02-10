"use client";

import { useState } from "react";
import indianCities from "../../../assets/indianCities";
import CartTotal from "../../Cart/CartTotal/CartTotal";
import { useNavigate } from "react-router-dom";

export default function OrderForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    zipcode: "",
    country: "India",
    address: "",
    city: "",
    customCity: "",
  });

  const [showCustomCity, setShowCustomCity] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    if (selectedCity === "other") {
      setShowCustomCity(true);
      setFormData((prevData) => ({ ...prevData, city: "" }));
    } else {
      setShowCustomCity(false);
      setFormData((prevData) => ({
        ...prevData,
        city: selectedCity,
        customCity: "",
      }));
    }
  };
  
  const handlePayment = () => {
    navigate("/payment");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handlePayment()
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };
  
  return (
    <div className=" flex  justify-center sm:px-6 lg:px-8">
      <div className=" w-full space-y-8">
        <div className="bg-white p-8  ">
          <form
            className="mt-3  grid grid-cols-1 md:grid-cols-2 "
            onSubmit={handleSubmit}
          >
            <div className="md:border-r-2 md:pr-5">
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="sr-only">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="appearance-none 
                    rounded-none relative block
                     w-full px-3 py-2 border
                      border-gray-300
                       placeholder-gray-500
                        text-gray-900 rounded-t-md
                         focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="sr-only">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="street" className="sr-only">
                    Street
                  </label>
                  <input
                    id="street"
                    name="street"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                    placeholder="Street"
                    value={formData.street}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="zipcode" className="sr-only">
                    Zipcode
                  </label>
                  <input
                    id="zipcode"
                    name="zipcode"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                    placeholder="Zipcode"
                    value={formData.zipcode}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="address" className="sr-only">
                    Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="city" className="sr-only">
                    City
                  </label>
                  <select
                    id="city"
                    name="city"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                    value={formData.city}
                    onChange={handleCityChange}
                  >
                    <option value="">Select a city</option>
                    {indianCities.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div>
                {showCustomCity && (
                  <div>
                    <label htmlFor="customCity" className="sr-only">
                      Custom City
                    </label>
                    <input
                      id="customCity"
                      name="customCity"
                      type="text"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                      placeholder="Enter your city"
                      value={formData.customCity}
                      onChange={handleInputChange}
                    />
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="divider md:hidden"></div>

              <CartTotal />
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="btn bg-pink-500 text-white
           hover:bg-pink-600 waves waves-light border-none"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
