import React,{useState, useEffect} from "react";
import "./components/style.css";
import { AnimeList } from "./components/AnimeList";
import { AnimeInfo } from "./components/AnimeInfo";


function App() {

  
  const [animeData,setAnimeData] = useState(); 
  const [searchAnime,setSearchAnime] = useState('Naruto'); 
  const [animeInfo,setAnimeInfo] = useState(); 

  const getData= async()=>{
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${searchAnime}&limit=20`);
    const resData = await res.json();
    setAnimeData(resData.data);
    console.log(resData); 

  }   
 
  useEffect(()=>{ 
    getData();
  },[searchAnime])
 
  return ( 
    <>
    <div className="header">
      <h1>MyAnimeVault</h1>
      <div className="search-box">
        <input type="search" placeholder="anime name..." 
          onChange={(e) => setSearchAnime(e.target.value)} />
      </div>
    </div>
    <div className="container">
        <div className="anime-info">
          {animeInfo && <AnimeInfo/>}
        </div>
        <div className="anime-row">
          <h2 className="text-heading">Anime</h2>
          <div className="row">
            <AnimeList animelist={animeData}
            setAnimeInfo={setAnimeInfo}/> 
          </div>
        </div>
      </div> 
    </>  
  );
}


export default App;
