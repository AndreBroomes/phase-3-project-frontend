function MovieCard({image, year, title}){

    return(
        <div className="card" >
          <img src={image} className="img"></img>
          <div className="container">
          
              <h1>{title}</h1>
              <h1>{year}</h1>
          </div>
        </div>
    )
}

export default MovieCard