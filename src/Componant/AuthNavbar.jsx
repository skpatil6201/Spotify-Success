import React from 'react';
import { Link } from "react-router-dom";

const AuthNavbar = () => {
  return (
    <div>
      {/* Navigation bar with a fixed height and width, styled as a flex container */}
      <nav className="h-[50px] fixed w-full items-center flex">
        
        {/* Container to center and space content in the navbar */}
        <div className="flex items-center w-[60%] m-auto justify-between">
          
          {/* Left section: Branding */}
          <div className="flex w-[50%]">
            <span>Spotify</span>     
          </div>

          {/* Right section: Login prompt for registered users */}
          <div>
            Already Registered?{" "}
            <Link to="/login">
              <span className="text-blue-400 font-bold">Login</span>
            </Link>{" "}
            Here
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AuthNavbar;
