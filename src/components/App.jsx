import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import Header from '../partials/Header/Header';
import Footer from '../partials/Footer/Footer';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path ="cast" element={<p>Cast</p>} />
            <Route path ="reviews" element={<p>Reviews</p>} />
          </Route>
        </Route>
        
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
