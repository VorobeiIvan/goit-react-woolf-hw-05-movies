import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className="movies-list">
      {movies.map(movie => (
        <li className="movie-link" key={movie.id}>
          <Link
            className="movie-link"
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
