import React, { useState, useEffect } from 'react';
import { getMovieCreditsApi } from '../../api/moviesApi';
import './Cast.css';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await getMovieCreditsApi(movieId);
        setCast(response.data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div className="cast-container">
      <h3 className="cast-title">Cast</h3>
      {loading && <p>Loading cast...</p>}
      {error && <p>Error fetching cast: {error}</p>}
      <ul className="cast-list">
        {cast.map(actor => (
          <li className="cast-item" key={actor.id}>
            <img
              className="movie-details-image"
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : defaultImg
              }
              width={250}
              alt={actor.name}
            />

            {actor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
