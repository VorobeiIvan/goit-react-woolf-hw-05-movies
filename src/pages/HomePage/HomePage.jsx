import React, { useState, useEffect } from 'react';
import { getBestMoviesApi } from '../../api/moviesApi';
import './HomePage.css';
import MoviesList from 'components/Movieslist';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await getBestMoviesApi();
        setMovies(response.data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-page">
      <h1 className="movies-page-title">Popular Movies</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <MoviesList movies={movies} />
    </div>
  );
};

export default HomePage;
