import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import Header from '../partials/Header/Header';
import Footer from '../partials/Footer/Footer';

const App = () => {
  const handleGoBack = () => {
    console.log('Go back to previous page');
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route
          path="/movies/:movieId"
          element={<MovieDetailsPage goBack={handleGoBack} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
