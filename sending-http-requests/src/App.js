import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [moviesState, setMoviesState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState(null);
  
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setErrorState(null);
    try {
      const response = await fetch('https://swapi.dev/api/films/', {
        method: 'GET',
      });
      if(!response.ok) {
        throw new Error('Something went wrong :(');
      }
      const movieData = await response.json();

      const transformedMovies = movieData.results.map(movie => ({
        id: movie.episode_id,
        title: movie.title,
        releaseDate: movie.release_date,
        openingText: movie.opening_crawl,
      }));
      setMoviesState(transformedMovies);
    } catch (error) {
      setErrorState(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && <h1>Fetching data...</h1>}
        {!isLoading && moviesState.length > 0 && !errorState && <MoviesList movies={moviesState} />}
        {!isLoading && moviesState.length === 0 && <h1>No results found</h1>}
        {!isLoading && errorState && <h1>{errorState}</h1>}
      </section>
    </React.Fragment>
  );
}

export default App;
