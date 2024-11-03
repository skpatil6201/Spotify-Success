import React from "react";
import PlayBarSettings from "./PlayBarSettings"; // Importing PlayBarSettings component
import SongInfo from "./SongInfo"; // Importing SongInfo component
import Media from "./Media"; // Importing Media component

const CurrentSong = () => {
  return (
    <div className="pt-2 w-full h-full">
      {/* Main container for the current song playback area */}
      <div className="bg-black h-full flex justify-between items-center px-2">
        
        {/* Component displaying song information */}
        <SongInfo />
        
        {/* Component for media controls (play, pause, etc.) */}
        <Media />
        
        {/* Component for additional settings related to the playback bar */}
        <PlayBarSettings />
      </div>
    </div>
  );
};

export default CurrentSong;
