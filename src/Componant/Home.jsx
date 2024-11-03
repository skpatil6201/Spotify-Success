import React, { useState } from 'react';
import SideBar from './SideBar';
import PlayBar from './PlayBar';
import Navbar from './Navbar';
import Album from './Album';
import PlayList from './Playlist';
import PopularArtist from './PopularArtist';
import AuthNavbar from './AuthNavbar';

function Home() {
  // State to track if a user is logged in
  const [user, setUser] = useState(false); // Use setUser to follow naming conventions

  return (
    <>
      <SideBar />
      <PlayBar />

      {/* Main layout section */}
      <div className="flex ml-8 w-[60%]">
        {/* Render Navbar or AuthNavbar based on user state */}
        {user ? <Navbar /> : <AuthNavbar />}
      </div>

      <div className="w-[3/4]">
        {/* Render additional components */}
        <PopularArtist />
        <PlayList />
        <Album />
      </div>
    </>
  );
}

export default Home;
