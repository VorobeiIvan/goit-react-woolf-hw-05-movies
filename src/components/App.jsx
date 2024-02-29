import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import Header from '../partials/Header/Header';
import Footer from 'partials/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />}>
          <Route path=":movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<p>Cast</p>} />
            <Route path="reviews" element={<p>Reviews</p>} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
