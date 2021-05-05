import React from 'react'
import { Link } from 'react-router-dom'


const Genre = ({title, movies, setId}) => {  

      const handleClick = (e) => {
         setId(e.target.parentElement.parentElement.id)
      }

    return (
        <div className="genre">
               <h1>{title}</h1>
               <div className="carousel">
                     {
                        movies.map(movie => (
                           <div key={movie.id} id={movie.id}>
                              <Link to="/movie-info"><img onClick={handleClick} src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/></Link>
                           </div>
                        ))
                     }
             </div>
        </div>
    )
}

export default Genre
