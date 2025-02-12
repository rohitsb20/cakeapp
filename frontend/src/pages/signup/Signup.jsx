import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
const Signup = () => {
  const { signuphandler } = useSignup();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confrimPassword: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signuphandler(formData);
  };

  return (
    <div className=" mt-2 flex items-start justify-center bg-white p-4">
      <div className="max-w-4xl w-full flex rounded-lg shadow-sm  overflow-hidden bg-white">
        {/* Image for large screens */}
        <div className="hidden lg:block lg:w-1/2 ">
          <img
            src="./src/assets/images/auth-image.jpg"
            alt="auth image"
            width={600}
            height={600}
            className="object-contain w-full h-full "
          />
        </div>

        {/* Signup form */}
        <div className="w-full lg:w-1/2 p-8">
          <h2
            className="text-3xl font-bold
           mb-6 text-center text-pink-500"
          >
            Signup
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-between space-x-3">
              {/* first name field */}
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-sm
                 font-medium text-gray-700"
                >
                  Firstname
                </label>
                <input
                  id="firstname"
                  name="firstname"
                  type="firstname"
                  required
                  value={formData.firstname}
                  onChange={handleChange}
                  className="mt-1 block
                 w-full px-3 py-2 border
                  border-gray-300 rounded-md
                   shadow-sm focus:outline-none
                    focus:ring-pink-500
                     focus:border-pink-500"
                />
              </div>
              {/* last name field */}

              <div>
                <label
                  htmlFor="lastname"
                  className="block text-sm
                 font-medium text-gray-700"
                >
                  Lastname
                </label>
                <input
                  id="lastname"
                  name="lastname"
                  type="lastname"
                  required
                  value={formData.lastname}
                  onChange={handleChange}
                  className="mt-1 block
                 w-full px-3 py-2 border
                  border-gray-300 rounded-md
                   shadow-sm focus:outline-none
                    focus:ring-pink-500
                     focus:border-pink-500"
                />
              </div>
            </div>

            {/* Phone number field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm
                 font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block
                 w-full px-3 py-2 border
                  border-gray-300 rounded-md
                   shadow-sm focus:outline-none
                    focus:ring-pink-500
                     focus:border-pink-500"
              />
            </div>

            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm
                 font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block
                 w-full px-3 py-2 border
                  border-gray-300 rounded-md
                   shadow-sm focus:outline-none
                    focus:ring-pink-500
                     focus:border-pink-500"
              />
            </div>

            {/* Password field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full
                 px-3 py-2 border
                  border-gray-300
                   rounded-md shadow-sm
                   
                   focus:outline-none
                    focus:ring-pink-500
                     focus:border-pink-500"
              />
            </div>

            {/* Confirm Password field */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full
                 px-3 py-2 border
                  border-gray-300
                   rounded-md shadow-sm
                   
                   focus:outline-none
                    focus:ring-pink-500
                     focus:border-pink-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex
                 justify-center py-2 px-4
                  border border-transparent
                   rounded-md shadow-sm text-sm
                    font-medium text-white
                     bg-pink-500
                      hover:bg-pink-600
                       focus:outline-none 
                       focus:ring-2 
                       focus:ring-offset-2
                        focus:ring-pink-600"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <Link
              to="/signin"
              className="text-sm
               text-pink-600 hover:text-pink-500"
            >
              Already have an account? Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
