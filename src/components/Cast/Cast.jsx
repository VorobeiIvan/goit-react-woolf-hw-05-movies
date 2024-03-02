import React, { useState, useEffect } from 'react';
import { getMovieCreditsApi } from '../../api/moviesApi';
import './Cast.css';
import useLocation from '../../hooks/useLocation';

const Cast = () => {
  const location = useLocation();
  const movieId = location.pathname.split('/')[2];

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

  return (
    <div className="cast-container">
      <h3 className="cast-title">Cast</h3>
      {loading && <p>Loading cast...</p>}
      {error && <p>Error fetching cast: {error}</p>}
      <ul className="cast-list">
        {cast.map(actor => (
          <li className="cast-item" key={actor.id}>
            {actor.profile_path && (
              <img
                className="cast-image"
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
              />
            )}
            {actor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
