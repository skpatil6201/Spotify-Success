import React, { useState, useEffect } from 'react';
import AlbumCard from './AlbumCard';
import { getRelatedArtists } from "../API/axiosInstance";
import { Link } from "react-router-dom";

const Album = () => {
  const [albums, setAlbums] = useState(null);

  const fetchAllAlbums = async () => {
    try {
      const response = await getRelatedArtists.get("/albums", {
        params: {
          ids: '3IBcauSj5M2A6lTeffJzdv'
        }
      });
      setAlbums(response.data.albums);
    } catch (error) {
      console.log("Error in fetching albums", error);
    }
  };

  useEffect(() => {
    fetchAllAlbums();
  }, []);

  return (
    <div>
      <div className="flex flex-col">
        <div className="mt-36 ml-96 font-bold text-4xl ">
          <Link to="/album"><h2>Albums</h2></Link>
        </div>

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
            <p>Loading albums...</p>
          )}
        </div>

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
