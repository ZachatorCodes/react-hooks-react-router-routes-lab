import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsToDisplay = directors.map((director) => {
    const movieArray = director.movies.map((movie, index) => {
      return <li key={index}>{movie}</li>;
    });
    return (
      <div key={director.name}>
        <h3>{director.name}</h3>
        <ul>{movieArray}</ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsToDisplay}
    </div>
  );
}

export default Directors;
