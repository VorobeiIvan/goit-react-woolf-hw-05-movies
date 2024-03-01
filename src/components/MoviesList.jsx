import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return movies.map(movie => (
    <li className="movie-link" key={movie.id}>
      <Link
        className="movie-link"
        to={`movies/${movie.id}`}
        state={{ from: 'movies-list' }}
      >
        {movie.title}
      </Link>
    </li>
  ));
};

export default MoviesList;
