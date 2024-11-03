import React from "react";
import { Link } from "react-router-dom";

// Advertisement component to promote Spotify sign-up
const Advertisement = () => {
  return (
    <div className="p-2 w-full h-full">
      {/* Gradient background with text and button */}
      <div className="bg-gradient-to-r from-pink-700 via-purple-600 to-sky-500 flex justify-between items-center cursor-pointer">
        <div className="px-5">
          <h2 className="text-sm font-bold">Preview of Spotify</h2>
          <h1 className="font-semibold">
            Sign Up to get unlimited Songs with occasional ads. No credit card needed.
          </h1>
        </div>
        <Link to="/signup">
          {/* Sign up button */}
          <button className="p-2 px-3 m-5 bg-white text-black rounded-xl font-bold" aria-label="Sign up for free">
            Sign up free
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Advertisement;
