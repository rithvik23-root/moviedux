import React from "react";
import "../styles.css";

export default function MovieCard({specific_movie,isWatchlisted,toggleWatchlist}) {

    function ratingColor(rating){
        if(rating>=8){
            return 'rating-good'
        }
        else if(rating<8 && rating>=5){
            return 'rating-ok'
        }
        else return 'rating-bad'
    }
  return (
    <div key={specific_movie.id} className="movie-card">
      <img src={`images/${specific_movie.image}`} alt={specific_movie.title} />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{specific_movie.title}</h3>
        <div>
        <span className="movie-card-genre">{specific_movie.genre}</span>
        <span className={`movie-card-rating ${ratingColor(specific_movie.rating)}`}>{specific_movie.rating}</span>
        <label className="switch">
            <input type="checkbox" checked={isWatchlisted} onChange={()=>toggleWatchlist(specific_movie.id)}></input>
            <span className="slider">
                <span className="slider-label">{isWatchlisted?"In Watchlist":"Add to Watchlist"}</span>
            </span>

        </label>
        </div>
        
      </div>
    </div>
  );
}
