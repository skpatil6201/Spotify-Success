import React from 'react';
import { IoIosArrowBack } from "react-icons/io"; // Importing the back arrow icon from react-icons
import Button from "./Button"; // Importing the custom Button component
import { Link, NavLink } from "react-router-dom"; // Importing Link and NavLink from react-router-dom for navigation

const Navbar = () => {
  return (
    // Main navigation bar
    <nav className="h-[50px] fixed w-full flex items-center bg-black shadow-md">
      <div className="flex items-center w-[60%] m-auto justify-between">
        {/* Left side of the navbar with a back link */}
        <div className="flex items-center w-[50%]">
          <Link to="/" aria-label="Go back to home"> {/* Link to the home page */}
            <div className="text-white cursor-pointer flex items-center"> {/* Flex container for icon and text */}
              <IoIosArrowBack /> {/* Back arrow icon */}
              <span className="ml-1">Back</span> {/* Text next to the icon */}
            </div>
          </Link>
        </div>

        {/* Right side of the navbar for Sign Up and Login buttons */}
        <div className="flex space-x-4">
          <NavLink to="/signup" activeClassName="font-bold text-green-500"> {/* Navigation link for Sign Up */}
            <Button primaryColor={"black"} background={"white"} borderColor={"black"}>
              Sign Up
            </Button>
          </NavLink>
          <NavLink to="/login" activeClassName="font-bold text-green-500"> {/* Navigation link for Login */}
            <Button primaryColor={"black"} background={"white"} borderColor={"black"}>
              Login
            </Button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; // Exporting the Navbar component for use in other parts of the application
