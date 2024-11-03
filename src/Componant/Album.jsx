import React, { useState, useEffect } from 'react';
import AlbumCard from './AlbumCard';
import { getRelatedArtists } from "../API/axiosInstance";
import { Link } from "react-router-dom";

const Album = () => {
  // State to hold album data
  const [albums, setAlbums] = useState(null);

  // Function to fetch albums data from the API
  const fetchAllAlbums = async () => {
    try {
      // Fetch albums with a specific ID (example provided here)
      const response = await getRelatedArtists.get("/albums", {
        params: {
          ids: '3IBcauSj5M2A6lTeffJzdv'
        }
      });
      // Update state with fetched album data
      setAlbums(response.data.albums);
    } catch (error) {
      console.log("Error in fetching albums", error);
    }
  };

  // useEffect to fetch data when component mounts
  useEffect(() => {
    fetchAllAlbums();
  }, []);

  return (
    <div>
      <div className="flex flex-col">
        {/* Header with Link to albums page */}
        <div className="mt-36 ml-96 font-bold text-4xl ">
          <Link to="/album"><h2>Albums</h2></Link>
        </div>

        {/* Display list of albums with fallback for loading */}
        <div className="mt-36 ml-96 flex flex-wrap gap-4">
          {albums ? (
            albums.map((album, index) => (
              <div key={index}>
                {/* Check if album and album.images exist before accessing */}
                {album && album.images?.[0] ? (
                  <img src={album.images[0].url} alt={album.name || "No name available"} />
                ) : (
                  <p>No image available</p>
                )}
                <p>{album?.name || "Unknown Album Name"}</p>
              </div>
            ))
          ) : (
            // Show loading message if albums data is not yet available
            <p>Loading albums...</p>
          )}
        </div>

        {/* Render AlbumCard components with album data */}
        <div className="mt-36 ml-96 flex flex-wrap gap-4">
          {albums && albums.map((album, index) => (
            album && (
              <AlbumCard
                key={album.uid || index}
                images={album.images}
                name={album.name || "Unknown Album Name"}
                type={album.type}
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Album;
