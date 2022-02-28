import React from "react";
import { actors } from "../data";

function Actors() {

  const actorsList = actors.map((actor)=>{
    const movies = actor.movies.map((movie)=>{
      return <li key={movie}>{movie}</li>
    })
    return(
      <div key={actor.name}>
        <h3>{actor.name}</h3>
        <ul>{movies}</ul>
        </div>
      )
  })
  return (
  <div>
    <h1>Actors Page</h1>
    {actorsList}
  </div>
  );
}

export default Actors;
