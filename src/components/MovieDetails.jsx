import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetailsApi } from '../api/moviesApi';

const MovieDetails = ({ handleGoBack }) => {
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

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div className="movie-details-page">
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
          {!movieDetails.poster_path && (
            <img
              className="movie-details-image"
              src={defaultImg}
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
    </div>
  );
};

export default MovieDetails;
