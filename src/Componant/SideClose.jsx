import React, { useState } from "react";
import { GoHomeFill, GoHome } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineLocationSearching } from "react-icons/md";
import { Link } from "react-router-dom";

function SideClose() {
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
    <div className="rounded-md bg-[#0a0e16] m-1 p-4 pl-3">
      {/* Link to Home section */}
      <Link to="/">
        <div
          className={`mb-5 flex gap-4 justify-center items-center hover:text-white ${
            !homeOpen && "text-gray-400" // Change color if not active
          }`}
          onClick={homeHandler} // Trigger home handler on click
        >
          {homeOpen ? (
            <GoHomeFill className="text-[30px]" /> // Filled icon when active
          ) : (
            <GoHome className="text-[30px]" /> // Outline icon when inactive
          )}
        </div>
      </Link>
      {/* Link to Search section */}
      <Link to="/search">
        <div
          className={`flex gap-4 justify-center items-center hover:text-white ${
            !searchOpen && "text-gray-400" // Change color if not active
          }`}
          onClick={searchHandler} // Trigger search handler on click
        >
          {!searchOpen ? (
            <IoSearchOutline className="text-[30px]" /> // Outline icon when inactive
          ) : (
            <MdOutlineLocationSearching className="text-[30px]" /> // Filled icon when active
          )}
        </div>
      </Link>
    </div>
  );
}

export default SideClose;
