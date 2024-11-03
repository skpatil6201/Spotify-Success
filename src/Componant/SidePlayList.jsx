import React, { useState } from 'react'; // Importing React and useState hook

function SidePlayList() {
  // State to manage the playlists
  const [playLists, setPlayLists] = useState(null); // Initially set to null, indicating no playlists exist

  return (
    <div className="mt-3">
      {/* Conditional rendering based on the playLists state */}
      {playLists === null && (
        <div className="bg-gray-800 w-full h-[150px] rounded-xl p-4">
          <h3 className="text-white font-bold text-md my-2">
            Create Your First Playlist
          </h3>
          <h5 className="text-white font-bold text-sm">
            It is easy, we will help you
          </h5>

          {/* Button to create a new playlist */}
          <button className="bg-white font-bold text-md text-black hover:px-3 p-2 my-3 rounded-2xl">
            Create PlayList
          </button>
        </div>
      )}
    </div>
  );
}

export default SidePlayList;
