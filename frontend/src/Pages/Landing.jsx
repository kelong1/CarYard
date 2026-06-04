import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Landing = () => {
  const user = useSelector((state) => state.authReducer.user);

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center">
      <div className="text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to Our Application
        </h1>

        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-10 text-gray-200">
          Experience a modern platform where you can manage your account,
          explore features, and securely access your dashboard.
        </p>
        {user && user.token ? (
          <Link to="/viewcars">
            <button className="bg-white text-blue-700 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-200 transition duration-300 shadow-lg">
              Go to Dashboard
            </button>
          </Link>
        ) : (
          <>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/login">
                <button className="bg-white text-blue-700 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-200 transition duration-300 shadow-lg">
                  Login
                </button>
              </Link>

              <Link to="/register">
                <button className="bg-black/30 border border-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-black/50 transition duration-300 shadow-lg">
                  Register
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Landing;
