import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsToDisplay = actors.map((actor) => {
    const movieArray = actor.movies.map((movie, index) => {
      return <li key={index}>{movie}</li>;
    });
    return (
      <div key={actor.name}>
        <h3>{actor.name}</h3>
        <ul>{movieArray}</ul>
      </div>
    )
  });
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsToDisplay};
    </div>
  );
}

export default Actors;
