import React, { useState, useEffect } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
  Outlet,
  Link,
} from 'react-router-dom';
import { getMovieDetailsApi } from '../../api/moviesApi';
import './MovieDetailsPage.css';
import MovieDetails from '../../components/MovieDetails';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
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
    if (location.state && location.state.from) {
      navigate(location.state?.from || '/');
    } else {
      navigate(-1);
    }
  };

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
      <button className="go-back-button" onClick={handleGoBack}>
        Go Back
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {movieDetails && (
        <div className="movie-details-container">
          <MovieDetails
            movieDetails={movieDetails}
            loading={loading}
            error={error}
            handleGoBack={handleGoBack}
          />
          <Link className="cast-button" onClick={handleCastClick}>
            {showCast ? 'Hide Cast' : 'Show Cast'}
          </Link>
          {showCast && <Cast movieId={movieId} />}
          <Link className="reviews-button" onClick={handleReviewsClick}>
            {showReviews ? 'Hide Reviews' : 'Show Reviews'}
          </Link>
          {showReviews && <Reviews movieId={movieId} />}
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
