import React, { useState, useEffect } from 'react';
import { getBestMoviesApi } from '../../api/moviesApi';
import { useSearchParams } from 'react-router-dom';
import './HomePage.css';
import MoviesList from '../../components/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await getBestMoviesApi(searchParams.get('query'));
        setMovies(response.data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

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
