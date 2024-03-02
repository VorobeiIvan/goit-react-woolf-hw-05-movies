import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <ul className="movies-list">
      {movies.map(movie => (
        <li className="movie-link" key={movie.id}>
          <Link className="movie-link" to={`/movies/${movie.id}`}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
