import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map((movie)=>{
    const genres = movie.genres.map((genre)=>{
      return(<li key={genre}>{genre}</li>)
    })
    return (<div key={movie.title}>
      <h3>{movie.title}</h3>
      <p>{movie.time}</p>
      <ul>
        {genres}
      </ul>

    </div>)
  })
  return (
  <div>
    <h1>Movies Page</h1>
    {movieList}
  </div>
  );
}

export default Movies;
