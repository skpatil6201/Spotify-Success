import React,{useState} from 'react'
import SideBar from './SideBar'
import PlayBar from './PlayBar'
import Navbar from './Navbar'
import Album from './Album'
import PlayList from './Playlist'
import PopularArtist from './PopularArtist'
import AuthNavbar from './AuthNavbar'
function Home() {
  
  const [user, setuser] = useState(false);
  return (<>
  <SideBar/>
  <PlayBar/>

  <div className="flex ml-8 w-[60%]">
  <Navbar/>
  
  {user ? Navbar : AuthNavbar}</div>
  <div className="w-[3/4]">
  <PopularArtist/>
  <PlayList/>
  <Album/>
  </div>
  </>
  )
}

export default Home