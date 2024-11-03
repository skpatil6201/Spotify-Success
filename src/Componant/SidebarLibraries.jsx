import React, { useState } from "react";
import { VscLibrary } from "react-icons/vsc";
import { BiLibrary } from "react-icons/bi";
import { FaPlus, FaArrowRight } from "react-icons/fa6";
import SideBarPlayList from "./SidePlayList";
import SideBarPodCast from "./SidePodCast";

const SidebarLibraries = ({ state, fun }) => {
  const [libraryOpen, setLibraryOpen] = useState(false); // State to manage the visibility of libraries

  // Toggle the library open state and notify the parent component
  const toggleLibraryHandler = () => {
    setLibraryOpen((prev) => !prev); // Toggle the library open state
    fun(!state); // Call the parent function to update state
  };

  return (
    <div className="rounded-md bg-[#0a0e16] m-1 p-4 h-[70vh]">
      <div>
        <div className="pl-3 flex justify-between my-2">
          <div
            className={`flex items-center gap-2 hover:text-white ${
              !libraryOpen ? "text-gray-400" : "text-white"
            }`} // Change text color based on library state
            onClick={toggleLibraryHandler} // Toggle the library section on click
          >
            {libraryOpen ? (
              <VscLibrary className="text-[30px]" /> // Display filled library icon when open
            ) : (
              <BiLibrary className="text-[30px]" /> // Display outline library icon when closed
            )}
            <span className="text-md font-bold">Your Libraries</span> {/* Label for the library section */}
          </div>
          <div className="flex gap-5 items-center text-gray-400 text-[15px] pr-3">
            <FaPlus className="hover:text-white cursor-pointer" /> {/* Button to add new libraries */}
            <FaArrowRight className="hover:text-white cursor-pointer" /> {/* Button for further actions */}
          </div>
        </div>
        {libraryOpen && (
          <>
            <SideBarPlayList /> {/* Render playlists if the library is open */}
            <SideBarPodCast /> {/* Render podcasts if the library is open */}
          </>
        )}
      </div>
    </div>
  );
};

export default SidebarLibraries;
