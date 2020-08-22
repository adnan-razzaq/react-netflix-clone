import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original";

export default function Row({ title, fetchUrl, islargeRow }) {
  const [movies, setmovies] = useState([]);
  const [trailer, settrailer] = useState("");

  /* it runs on a specific condition */
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleclick = (movie) => {
    if (trailer) {
      settrailer("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlparams = new URLSearchParams(new URL(url).search);
          settrailer(urlparams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/* several row posters */}
        {movies.map((movie) => (
          <img
            onClick={() => handleclick(movie)}
            key={movie.id}
            className={`row__poster ${islargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              islargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <YouTube videoId={trailer} opts={opts} />
    </div>
  );
}
