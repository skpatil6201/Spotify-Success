import React from 'react'; // Importing React
import { Route, Routes } from 'react-router-dom'; // Importing Route and Routes for routing
import Home from '../src/Componant/Home'; // Importing Home component
import Search from '../src/Componant/Search'; // Importing Search component
import Signup from '../src/Componant/Signup'; // Importing Signup component
import Login from '../src/Componant/Login'; // Importing Login component
import PopularArtist from '../src/Componant/PopularArtist'; // Importing PopularArtist component
import Playlist from '../src/Componant/Playlist'; // Importing Playlist component
import Album from '../src/Componant/Album'; // Importing Album component
import User from '../src/Componant/User'; // Importing User component
import Auth from '../src/Componant/Auth'; // Importing Auth component
import PlaylistCard from './Componant/PlaylistCard'; // Importing PlaylistCard component

// Main App component
export default function App() {
  return (
    <Routes> {/* Setting up routes for the application */}
      {/* Route for the Home page */}
      <Route path="/" element={<Home />} />
      {/* Route for the Search page */}
      <Route path="/search" element={<Search />} />
      {/* Route for the Signup page */}
      <Route path="/signup" element={<Signup />} />
      {/* Route for the Login page */}
      <Route path="/login" element={<Login />} />
      {/* Route for the Popular Artist page */}
      <Route path="/popularartist" element={<PopularArtist />} />
      {/* Route for the Playlist page */}
      <Route path="/playlist" element={<Playlist />} />
      {/* Route for the Album page */}
      <Route path="/album" element={<Album />} />
      {/* Route for the Auth page */}
      <Route path="/auth" element={<Auth />} />
      {/* Route for the PlaylistCard page */}
      <Route path="/PlaylistCard" element={<PlaylistCard />} />
      {/* Route for the User page */}
      <Route path="/user" element={<User />} />
    </Routes>
  );
}
