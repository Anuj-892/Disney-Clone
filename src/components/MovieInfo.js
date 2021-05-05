import React from 'react'

const MovieInfo = ({movieInfo}) => {
    console.log(Object.keys(movieInfo).length>0);
    const {poster_path, genres, original_title, overview, production_companies, production_countries, release_date, runtime, tagline} = movieInfo;

    return (
        <section className="movie-info">
           <div className="container">
               {
                   Object.keys(movieInfo).length>0 && <div className="movie">                           
                <img src={`http://image.tmdb.org/t/p/w500/${poster_path}`}/>
                <div className="info">
                        <h1>{original_title}</h1>
                        <h5>{tagline}</h5>
                            
                            <ul>
                                <h4>Genres:</h4>
                                    {
                                        genres && genres.map(genre => (
                                            <li>{genre.name}</li>
                                        ))
                                    }
                            </ul>

                            <p>{overview}</p>

                            <ul>
                               <h4>Production Companies:</h4>
                                    {
                                        production_companies && production_companies.map(company => (
                                            <li>{company.name}</li>
                                        ))
                                    }
                            </ul>
                            <ul>
                                <h4>Production Countries:</h4>
                                    {
                                       production_countries &&  production_countries.map(country => (
                                            <li>{country.name}</li>
                                        ))
                                    }
                            </ul>
                            <h4>Release Date : {release_date}</h4>
                            <h4>Runtime: {runtime}</h4>
                        </div> 
                   </div>
               }
           </div>
        </section>
    )
}

export default MovieInfo
