import React, { useState, useEffect } from 'react';
import PlaylistCard from './PlaylistCard'; // Import the PlaylistCard component for displaying individual playlists
import { getRelatedArtists } from "../API/axiosInstance"; // Import the API instance for making requests
import { Link } from "react-router-dom"; // Import Link for client-side routing

const PlayList = () => {
  // State to hold the playlists data
  const [playlists, setPlaylists] = useState([]);
  
  // State to indicate if the playlists are currently loading
  const [loading, setLoading] = useState(true);
  
  // State to hold any error messages
  const [error, setError] = useState(null);

  // Function to fetch all playlists from the API
  const fetchAllPlaylists = async () => {
    try {
      // Make an API call to get playlists
      const response = await getRelatedArtists.get("/playlist", {
        params: { id: '7DgPQwzEoUVfQYBiMLER9Z' } // Example playlist ID
      });
      // Update the playlists state with the fetched data, default to empty array if none
      setPlaylists(response.data.playlists || []);
    } catch (error) {
      // If an error occurs, set the error state
      setError("Error in fetching playlists");
      console.error(error); // Log the error for debugging purposes
    } finally {
      // Whether the request was successful or not, set loading to false
      setLoading(false);
    }
  };

  // useEffect to call fetchAllPlaylists on component mount
  useEffect(() => {
    fetchAllPlaylists();
  }, []); // Empty dependency array means this runs once after the initial render

  // Show loading message while playlists are being fetched
  if (loading) {
    return <div>Loading playlists...</div>;
  }

  // Show error message if there was an error fetching playlists
  if (error) {
    return <div>{error}</div>;
  }

  // Render the playlists if they were successfully fetched
  return (
    <div className="flex flex-col">
      {/* Heading for the playlists section */}
      <div className="mt-36 ml-96 font-bold text-4xl">
        <Link to="/playlist"><h2>Spotify PlayList</h2></Link>
      </div>
      <div className="mt-36 ml-96 flex flex-wrap gap-4">
        {/* Map through the playlists and render a PlaylistCard for each */}
        {playlists.map((playlist) => (
          <PlaylistCard
            key={playlist.id} // Use playlist ID as the unique key for each card
            images={playlist.images} // Pass playlist images to the PlaylistCard
            name={playlist.name} // Pass playlist name to the PlaylistCard
            type={playlist.type} // Pass playlist type to the PlaylistCard
          />
        ))}
      </div>
    </div>
  );
};

export default PlayList; // Export the PlayList component for use in other parts of the app
