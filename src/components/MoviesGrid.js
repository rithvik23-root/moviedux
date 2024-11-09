import React from "react";
import { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid({movies,toggleWatchlist,watchList}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre,setGenre]=useState("All genres")
  const [rating,setRating]=useState("Any Ratings")



  function callSearchState(e){
    setSearchTerm(e.target.value)
  }

  function callRatingState(e){
    setRating(e.target.value)
  }

  function callGenreState(e){
    setGenre(e.target.value)
  }

  function filterByGenre(movie,genre){
    return genre==="All genres" || movie.genre.toLowerCase()===genre.toLowerCase()
  }
  function filterBySearch(movie,searchTerm){
      return movie.title.toLowerCase().includes(searchTerm.toLowerCase())
     }

  function filterByRating(movie,rating){
    switch(rating){
      case "Any Ratings":
        return true;

      case "Good":
        return movie.rating>=8;
      case "Ok":
        return movie.rating<8 && movie.rating>=5;

      case "Bad":
        return movie.rating<5;

      default:
       return false

      }
    
  }


  function filteredMovies(){
    
    return movies.filter((movie)=>
      filterByGenre(movie,genre)&&
      filterByRating(movie,rating)&&
      filterBySearch(movie,searchTerm)
    )
    
  }

  
  return (
    <div>
      <div>
        <input className="search-input" type="text" placeholder="Search Movie" value={searchTerm} onChange={callSearchState}/>
      </div>
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select className="filter-dropdown" value={genre} onChange={callGenreState}>
            <option>All genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>

        </div>
        <div className="filter-slot">
        <label>Rating</label>
          <select className="filter-dropdown" value={rating} onChange={callRatingState}>
            <option>Any Ratings</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovies().map((movie) => (
          <MovieCard specific_movie={movie} key={movie.id} isWatchlisted={watchList.includes(movie.id)} toggleWatchlist={toggleWatchlist}></MovieCard>
        ))}
      </div>
    </div>
  );
}
