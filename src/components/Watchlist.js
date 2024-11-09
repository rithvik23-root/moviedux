import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";
export default function Watchlist({toggleWatchlist,watchList,movies}){
    
    return(
        <div>
            <h1 className="title">your watchlist</h1>
            <div className="watchlist">
            {
                watchList.map((i)=>{
                    const movie=movies.find((movie)=>movie.id===i)
                    return (<MovieCard specific_movie={movie} key={movie.id} isWatchlisted={true} toggleWatchlist={toggleWatchlist}></MovieCard>)
                })
            }
            </div>
            
        </div>
    )
}