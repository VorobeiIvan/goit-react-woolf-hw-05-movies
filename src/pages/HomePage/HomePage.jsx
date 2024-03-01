import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBestMoviesApi } from '../../api/moviesApi';
import './HomePage.css';
import MoviesList from 'components/MoviesList';

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
      <ul className="movies-list">{MoviesList(movies)}</ul>
    </div>
  );
};

export default HomePage;
