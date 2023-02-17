import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesToDisplay = movies.map((movie) => {
    const genreArray = movie.genres.map((genre, index) => {
      return <li key={index}>{genre}</li>;
    });

    return (
      <div key={movie.title}>
        <h3>{movie.title}</h3>
        <p>{movie.time} minute run-time</p>
        <ul>{genreArray}</ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesToDisplay}
    </div>
  );
}

export default Movies;
