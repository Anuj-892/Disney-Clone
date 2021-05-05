import React, { useEffect, useState } from 'react'
import Genre from './Genre'

const Options = ({setId}) => {

   const [movies, setMovies] = useState([]);
    
   useEffect(() => {
    const getData  = async (url) => {
         const response = await fetch(url);
         const dataObj = await response.json();
         const data = await dataObj.results;
        let a = data.filter(item => item['poster_path'] !== null)
        setMovies(movies => [...movies, a]);
    }

    getData(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`)
    getData(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=crime`)
    getData(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=drama`)
    getData(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=romance`)
    getData(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=thriller`)
    getData(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=horror`)
    getData(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=action`)
 }, [])


    return (
        <section className="options">
            <div className="container">
              {
                movies.length==7 && (
                  <>
                    <Genre setId={setId}  title="Trending" movies={movies[0]}/>
                    <Genre setId={setId}  title="Crime" movies={movies[1]}/>
                    <Genre setId={setId}  title="Drama" movies={movies[2]}/>
                    <Genre setId={setId}  title="Romance" movies={movies[3]}/>
                    <Genre setId={setId}  title="Thriller" movies={movies[4]}/>
                    <Genre setId={setId}  title="Horror" movies={movies[5]}/>
                    <Genre setId={setId}  title="Action" movies={movies[6]}/>
                  </>
                )
              }
            </div>
        </section>
    )
}

export default Options
