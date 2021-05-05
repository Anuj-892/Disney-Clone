import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import './assets/style.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MovieInfo from './components/MovieInfo'
import Options from './components/Options'

function App() { 
  const location = useLocation();
  const [movieInfo, setMovieInfo] = useState([]);
  const [id, setId] = useState('');
  console.log(movieInfo);
   useEffect(() => {
     console.log(id);
     const getMovie = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
      const data = await response.json();
      setMovieInfo(data);
     }
     getMovie();
   }, [id])

  return (
      <div className="App">
           <Header/>
           <main>
             <Hero/>
             {location.pathname == '/movie-info'? <MovieInfo movieInfo={movieInfo}/> : <Options setId={setId}/>}
           </main>
           <Footer/>
      </div>
  );
}

export default App;