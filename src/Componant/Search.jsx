import React from "react"; // Importing React
import SideBar from "./SideBar"; // Importing the sidebar component
import PlayBar from "./PlayBar"; // Importing the play bar component
import SearchHeader from "./SearchHeader"; // Importing the search header component
import { getMetaData } from "../Utils/getMetaData"; // Importing a utility function for fetching metadata

const Search = () => {
  getMetaData(); // Calling the function to fetch metadata (consider making this asynchronous)

  return (
    <>
      <SideBar /> {/* Sidebar for navigation */}
      <PlayBar /> {/* Play bar for audio control */}
      <div className="w-3/4 fixed top-2 right-2 h-[85vh] rounded-lg shadow-lg bg-gray-800">
        <SearchHeader /> {/* Header for the search feature */}
      </div>
    </>
  );
};

export default Search; // Exporting the Search component
