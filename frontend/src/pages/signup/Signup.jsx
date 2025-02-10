import { Link } from "react-router-dom";


const Signup = () => {
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
          <form className="space-y-6">
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
                htmlFor="phoneNumber"
                className="block text-sm
                 font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="phoneNumber"
                required
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
}

export default Signup