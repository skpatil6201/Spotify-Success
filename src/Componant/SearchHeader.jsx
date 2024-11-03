import React from "react"; // Importing React
import {
  IoChevronBackCircleOutline, // Importing back icon
  IoChevronForwardCircleOutline, // Importing forward icon
} from "react-icons/io5"; // Importing icons from react-icons

const Header = () => {
  return (
    <div className="fixed flex justify-between items-center h-[50px] w-3/4 bg-gray-900 text-white"> {/* Added background for visibility */}
      <div className="flex w-[10%] justify-evenly items-center">
        <IoChevronBackCircleOutline className="cursor-pointer hover:text-gray-400" /> {/* Added hover effect */}
        <IoChevronForwardCircleOutline className="cursor-pointer hover:text-gray-400" /> {/* Added hover effect */}
      </div>
      <div className="w-2/4 h-full">
        <input
          type="text"
          placeholder="What do you want to play"
          className="px-4 bg-black border border-gray-600 w-full h-[80%] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500" // Improved border styling and added focus ring
        />
      </div>
      <div className="w-1/4 flex justify-center items-center">Extras</div>
    </div>
  );
};

export default Header; // Exporting the Header component
