import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet, Link } from 'react-router-dom';
import { getMovieDetailsApi } from '../../api/moviesApi';
import './MovieDetailsPage.css';
import MovieDetails from '../../components/MovieDetails';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();
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

  const handleCastClick = () => {
    setShowCast(!showCast);
    setShowReviews(false);
  };

  const handleReviewsClick = () => {
    setShowReviews(!showReviews);
    setShowCast(false);
  };

  return (
    <div className="movie-details-page">
      <Link className="go-back-button" to={location.state?.from ?? '/'}>
        Go Back
      </Link>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {movieDetails && (
        <div className="movie-details-container">
          <MovieDetails
            movieDetails={movieDetails}
            loading={loading}
            error={error}
          />
          <Link
            className="cast-button"
            to={showCast ? '' : 'cast'}
            onClick={handleCastClick}
          >
            {showCast ? 'Hide Cast' : 'Show Cast'}
          </Link>
          <Link
            className="reviews-button"
            to={showReviews ? '' : 'reviews'}
            onClick={handleReviewsClick}
          >
            {showReviews ? 'Hide Reviews' : 'Show Reviews'}
          </Link>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
