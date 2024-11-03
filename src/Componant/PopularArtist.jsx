import React from 'react'; // Importing React
import ArtistCard from './ArtistCard'; // Importing ArtistCard component for rendering individual artists
import { useState, useEffect } from 'react'; // Importing hooks for state and lifecycle management
import { getRelatedArtists } from "../API/axiosInstance"; // Importing API utility for fetching data
import { Link } from "react-router-dom"; // Importing Link for navigation

const PopularArtist = () => {
  const [artists, setArtist] = useState(null); // State to hold the list of artists

  // Function to fetch artists from the API
  const fetchAllArtist = async () => {
    try {
      const response = await getRelatedArtists.get("/artist_related", {
        params: {
          id: '2w9zwq3AktTeYYMuhMjju8' // Example artist ID; replace with relevant ID as needed
        }
      });
      
      // Setting the artist data into the state
      setArtist(response.data.artists);
    } catch (error) {
      console.log("Error in fetching artist", error); // Logging error if fetching fails
    }
  };

  // useEffect to fetch artists on component mount
  useEffect(() => {
    fetchAllArtist();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="flex flex-col">
      <div className="mt-36 ml-96 font-bold text-4xl ">
        {/* Navigation link to the Popular Artist page */}
        <Link to="/popularartist">
          <h2>Popular Artist</h2>
        </Link>
      </div>
      <div className="mt-36 ml-96 flex flex-wrap gap-4">
        {/* Mapping over artists to render ArtistCard for each */}
        {artists && artists.map((artist) => (
          <ArtistCard 
            key={artist.id} // Unique key for each artist card
            images={artist.images} // Passing artist images
            name={artist.name} // Passing artist name
            type={artist.type} // Passing artist type (if applicable)
          />
        ))}
      </div>
    </div>
  );
};

export default PopularArtist; // Exporting the PopularArtist component
