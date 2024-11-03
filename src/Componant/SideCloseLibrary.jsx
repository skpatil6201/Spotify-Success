import React, { useState } from "react";
import { VscLibrary } from 'react-icons/vsc';
import { BiLibrary } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";

const SideCloseLibrary = ({ state, fun }) => {
  const [libraryOpen, setLibraryOpen] = useState(false); // State to track if the library section is open

  // Handler function to toggle the library section
  const libraryHandler = () => {
    setLibraryOpen(true); // Set libraryOpen to true when clicked
    fun(!state); // Toggle the state in the parent component
  };

  return (
    <div className="rounded-md bg-[#0a0e16] m-1 p-4 h-[70vh] ">
      <div>
        <div className="my-2">
          {/* Library icon with hover effect */}
          <div
            className={`flex justify-center items-center gap-2 hover:text-white ${
              !libraryOpen && "text-gray-400" // Change color if library is not open
            }`}
            onClick={libraryHandler} // Trigger library handler on click
          >
            {/* Display different icons based on the library's open state */}
            {!libraryOpen ? (
              <BiLibrary className="text-[30px]" /> // Outline library icon when inactive
            ) : (
              <VscLibrary className="text-[30px]" /> // Filled library icon when active
            )}
          </div>
          <div className="flex justify-center my-5 gap-5 items-center text-gray-400 text-[15px]">
            <FaPlus className="hover:text-white cursor-pointer" /> {/* Icon to add new items */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideCloseLibrary;
