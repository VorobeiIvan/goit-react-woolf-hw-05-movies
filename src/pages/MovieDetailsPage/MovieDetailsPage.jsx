import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import { getMovieDetailsApi } from '../../api/moviesApi';
import './MovieDetailsPage.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

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

  const handleCastClick = () => {
    setShowCast(true);
    setShowReviews(false);
  };

  const handleReviewsClick = () => {
    setShowReviews(true);
    setShowCast(false);
  };

  return (
    <div className="movie-details-page">
      <button className="go-back-button" onClick={handleGoBack}>
        Go Back
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {movieDetails && (
        <div className="movie-details-container">
          <h2 className="movie-details-title">{movieDetails.title}</h2>
          <p className="movie-details-info">
            Release Date: {movieDetails.release_date}
          </p>
          <p className="movie-details-info">
            Overview: {movieDetails.overview}
          </p>
          {movieDetails.poster_path && (
            <img
              className="movie-details-image"
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          )}
          <p className="movie-details-info">
            Rating: {movieDetails.vote_average}
          </p>
          <p className="movie-details-info">
            Genres: {movieDetails.genres.map(genre => genre.name).join(', ')}
          </p>

          {movieDetails.homepage && (
            <p className="movie-details-info">
              Homepage:{' '}
              <a href={movieDetails.homepage}>{movieDetails.homepage}</a>
            </p>
          )}

          {movieDetails.imdb_id && (
            <p className="movie-details-info">
              IMDB ID:{' '}
              <a href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}>
                {movieDetails.imdb_id}
              </a>
            </p>
          )}

          <p className="movie-details-info">
            Runtime: {movieDetails.runtime} minutes
          </p>

          <p className="movie-details-info">
            Production Countries:{' '}
            {movieDetails.production_countries
              .map(country => country.name)
              .join(', ')}
          </p>
        </div>
      )}
      <button className="cast-button" onClick={handleCastClick}>
        Cast
      </button>
      <button className="reviews-button" onClick={handleReviewsClick}>
        Reviews
      </button>
      {showCast && <Cast movieId={movieId} />}
      {showReviews && <Reviews movieId={movieId} />}
    </div>
  );
};

export default MovieDetailsPage;
