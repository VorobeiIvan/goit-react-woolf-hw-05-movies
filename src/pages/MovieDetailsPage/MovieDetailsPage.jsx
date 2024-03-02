import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetailsApi } from '../../api/moviesApi';
import './MovieDetailsPage.css';
import MovieDetails from 'components/MovieDetails';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await getMovieDetailsApi(movieId);
        setMovieDetails(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="movie-details-page">
      <MovieDetails
        movieDetails={movieDetails}
        loading={loading}
        error={error}
        handleGoBack={handleGoBack}
      />
    </div>
  );
};

export default MovieDetailsPage;
