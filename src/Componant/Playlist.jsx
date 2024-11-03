import React from 'react'
import PlaylistCard from './PlaylistCard';
import {useState,useEffect} from 'react';
import {getRelatedArtists} from "../API/axiosInstance";
import { Link } from "react-router-dom";

const PlayList = () => {
  const [playlists,setPlaylists] = useState(null);

  const fetchAllPlaylist = async () =>{
      try{
        const playlists = await getRelatedArtists.get("/playlist",{
          params:{
            id :'7DgPQwzEoUVfQYBiMLER9Z'
          }
        })
        
        setPlaylists(playlists.data)
      }
      catch(error){
        console.log("Error in fetching playlist",error)
      }
  }

  useEffect(() => {
    fetchAllPlaylist();

  }, [])
  
  return (
    <div className="flex flex-col">
      <div className="mt-36 ml-96 font-bold text-4xl ">
      <Link to="/playlist"><h2>Spotify PlayList</h2></Link>
      </div>
      <div className="mt-36 ml-96 flex flex-wrap gap-4">
        
        {
          playlists && 
          <PlaylistCard 
          key={playlists.id} 
          images={playlists.images} 
          name={playlists.name} 
          type={playlists.type} 
        />
        }
        
      </div>
    </div>
  )
}

export default PlayList
