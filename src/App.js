import React, { useState, useEffect } from "react";
import "./components/style.css";
import { AnimeList } from "./components/AnimeList";
import { AnimeInfo } from "./components/AnimeInfo";

function App() {
  // State variables
  const [animeData, setAnimeData] = useState(); // Holds fetched anime data
  const [searchAnime, setSearchAnime] = useState('Naruto'); // Stores the searched anime
  const [animeInfo, setAnimeInfo] = useState(); // Stores selected anime information

  // Function to fetch anime data based on search query
  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${searchAnime}&limit=20`);
    const resData = await res.json();
    setAnimeData(resData.data);
    console.log(resData);
  };

  // Fetch data on initial load and when searchAnime changes
  useEffect(() => {
    getData();
  }, [searchAnime]);

  return (
    <>
      {/* Header section */}
      <div className="header">
        <h1>MyAnimeVault</h1>
        {/* Search box */}
        <div className="search-box">
          <input
            type="search"
            placeholder="anime name..."
            onChange={(e) => setSearchAnime(e.target.value)}
          />
        </div>
      </div>
      {/* Main content */}
      <div className="container">
        {/* Display selected anime information */}
        <div className="anime-info">
          {animeInfo && <AnimeInfo />}
        </div>
        {/* Display list of anime */}
        <div className="anime-row">
          <h2 className="text-heading">Anime</h2>
          <div className="row">
            {/* Pass fetched anime data and setter for animeInfo */}
            <AnimeList animelist={animeData} setAnimeInfo={setAnimeInfo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
