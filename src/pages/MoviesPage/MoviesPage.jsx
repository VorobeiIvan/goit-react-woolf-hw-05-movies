import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesList from '../../components/MoviesList';
import { getSearchMoviesApi } from '../../api/moviesApi';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');

    if (query) {
      fetchMovies(query);
    }
  }, [location.search]);

  const fetchMovies = async query => {
    setLoading(true);
    setError('');
    try {
      const response = await getSearchMoviesApi(query);
      if (response.data.results.length === 0) {
        setError('No movies found.');
        setMovies([]);
      } else {
        setMovies(response.data.results);
        setError('');
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setError('An error occurred while fetching movies.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = query => {
    const searchParams = new URLSearchParams();
    searchParams.set('query', query);
    window.history.pushState({}, '', `?${searchParams.toString()}`);
    fetchMovies(query);
  };

  const handleReset = () => {
    const searchParams = new URLSearchParams();
    window.history.pushState({}, '', `?${searchParams.toString()}`);
    window.location.reload();
  };

  return (
    <div className="movies-page">
      <h1 className="movies-page-title">Movies search</h1>
      <SearchForm onSubmit={handleSearch} onReset={handleReset} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && movies.length === 0 && (
        <p className="massage">No movies found.</p>
      )}
      {!loading && !error && movies.length > 0 && (
        <MoviesList movies={movies} />
      )}
    </div>
  );
};

export default MoviesPage;
