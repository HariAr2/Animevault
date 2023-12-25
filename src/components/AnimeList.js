import React from "react";

export const AnimeList = ({ animelist, setAnimeInfo }) => {
  console.log(animelist);

  return (
    <>
      {animelist ? (
        animelist.map((anime, index) => {
          return (
            <div className="card" key={index}>
              {anime.images &&
              anime.images.jpg &&
              anime.images.jpg.large_image_url ? (
                <img src={anime.images.jpg.large_image_url} alt="animeImg" />
              ) : (
                <img src="placeholder_image_url" alt="Placeholder" /> // Placeholder image or error handling
              )}
              <div className="anime-info">
                <h4>{anime.title}</h4>
              </div>
            </div>
          );
        })
      ) : (
        <div>Loading ... ... Please wait ...</div>
      )}
    </>
  );
};
