import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { getSearchMoviesApi } from '../../api/moviesApi';
import './MoviesPage.css';
import SearchForm from 'components/SearchForm';
import MoviesList from 'components/Movieslist';

const MoviesPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchBtnDisabled, setSearchBtnDisabled] = useState(true);
  const [resetBtnDisabled, setResetBtnDisabled] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setError('Enter your query.');
    if (
      location.pathname === '/movies' &&
      location.search === '' &&
      inputValue === ''
    ) {
      setMovies([]);
    }
  }, [location.pathname, location.search, inputValue]);

  const handleInput = e => {
    const value = e.target.value;
    setInputValue(value);
    setError('');
    if (value.trim() !== '') {
      setSearchBtnDisabled(false);
      setResetBtnDisabled(false);
    } else {
      setSearchBtnDisabled(true);
      setResetBtnDisabled(true);
    }
  };

  const handleSearch = async () => {
    if (inputValue.trim() !== '') {
      setLoading(true);
      try {
        const response = await getSearchMoviesApi(inputValue.trim());
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
    } else {
      setError('Please enter a valid search query.');
    }
  };

  const handleReset = () => {
    setInputValue('');
    setMovies([]);
    setError('Enter your query.');
    setSearchBtnDisabled(true);
    setResetBtnDisabled(true);
  };

  return (
    <div>
      <h1 className="movies-page-title">Movies search</h1>
      <SearchForm
        inputValue={inputValue}
        onInput={handleInput}
        onSearch={handleSearch}
        onReset={handleReset}
        searchBtnDisabled={searchBtnDisabled}
        resetBtnDisabled={resetBtnDisabled}
      />
      {loading && <p>Loading...</p>}
      {error && <p className="error-message massage">{error}</p>}
      {!loading && !error && movies.length === 0 && (
        <p className="no-results-message massage">No movies found.</p>
      )}
      {!loading && !error && movies.length > 0 && (
        <MoviesList movies={movies} />
      )}
    </div>
  );
};

export default MoviesPage;
