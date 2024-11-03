import React, { useState } from "react";
import { GoHomeFill, GoHome } from "react-icons/go"; // Icons for Home
import { IoSearchOutline } from "react-icons/io5"; // Icon for Search
import { MdOutlineLocationSearching } from "react-icons/md"; // Alternate Search icon
import { Link } from "react-router-dom"; // For routing between pages

function SideHeader() {
  // State to manage the currently opened section
  const [homeOpen, setHomeOpen] = useState(true);  // Track if the home section is active
  const [searchOpen, setSearchOpen] = useState(false); // Track if the search section is active

  // Handler function for switching to the home section
  const homeHandler = () => {
    setSearchOpen(false);  // Close the search section
    setHomeOpen(true);     // Open the home section
  };

  // Handler function for switching to the search section
  const searchHandler = () => {
    setSearchOpen(true);   // Open the search section
    setHomeOpen(false);    // Close the home section
  };

  return (
    <div className="rounded-md bg-[#0a0e16] m-1 p-4">
      <div className="pl-3">
        {/* Link to Home section */}
        <Link to={"/"}>
          <div
            className={`mb-5 flex gap-4 items-center hover:text-white ${
              !homeOpen && "text-gray-400" // Change color if not active
            }`}
            onClick={homeHandler} // Trigger home handler on click
          >
            {/* Display different home icons based on state */}
            {homeOpen ? (
              <GoHomeFill className="text-[30px]" /> // Filled icon when active
            ) : (
              <GoHome className="text-[30px]" /> // Outline icon when inactive
            )}
            <span className="text-md font-bold">Home</span>
          </div>
        </Link>

        {/* Link to Search section */}
        <Link to={"/search"}>
          <div
            className={`flex gap-4 items-center hover:text-white ${
              !searchOpen && "text-gray-400" // Change color if not active
            }`}
            onClick={searchHandler} // Trigger search handler on click
          >
            {/* Display different search icons based on state */}
            {!searchOpen ? (
              <IoSearchOutline className="text-[30px]" /> // Outline icon when inactive
            ) : (
              <MdOutlineLocationSearching className="text-[30px]" /> // Filled icon when active
            )}
            <span className="text-md font-bold">Search</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SideHeader;
