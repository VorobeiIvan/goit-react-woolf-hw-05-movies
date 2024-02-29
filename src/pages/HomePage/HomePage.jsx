import './HomePage.css';
import { getBestMoviesApi } from '../../api/moviesApi';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await getBestMoviesApi();
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderMoviesList = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <p>Error: {error}</p>;
    } else if (movies && movies.data) {
      return (
        <ol className="movies-list">
          {movies.data.results.map(movie => (
            <li key={movie.id}>
              <a
                href={`https://www.themoviedb.org/movie/${movie.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="movie-link"
              >
                {movie.title}
              </a>
            </li>
          ))}
        </ol>
      );
    } else {
      return null;
    }
  };

  return <div className="home-page">{renderMoviesList()}</div>;
};

export default HomePage;
