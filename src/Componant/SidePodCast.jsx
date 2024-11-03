import React, { useState } from "react"; // Importing React and useState hook

function SidePodCast() {
  // State to manage the podcasts
  const [podcasts, setPodcasts] = useState(null); // Initially set to null, indicating no podcasts exist

  return (
    <div className="mt-5">
      {/* Conditional rendering based on the podcasts state */}
      {podcasts === null && (
        <div className="bg-gray-800 w-full h-[150px] rounded-xl p-4">
          <h3 className="text-white font-bold text-md my-2">
            Let's find some podcasts to follow
          </h3>
          <h5 className="text-white font-bold text-sm">
            We'll keep you updated on the latest episodes
          </h5>

          {/* Button to browse for podcasts */}
          <button className="bg-white font-bold text-md text-black hover:px-3 p-2 my-3 rounded-2xl">
            Browse podcasts
          </button>
        </div>
      )}
    </div>
  );
}

export default SidePodCast;
