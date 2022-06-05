import MovieCard from "./MovieCard"
import React from"react"


function MoviePage({movies}){
  
   const renderMovies = movies.map((movie) => <MovieCard image={movie.Poster} title={movie.Title}
   year={movie.Year}/>)


    return(
        
       <div className="results-container">
           <h1>Results</h1>
        <div>
         {renderMovies}
        </div>
        </div>
        
    )
}

export default MoviePage