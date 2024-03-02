import { NavLink, useNavigate } from 'react-router-dom';
import '../Header/Header.css';

const Header = () => {
  const navigate = useNavigate();

  const goTo = path => {
    navigate(path);
  };

  return (
    <header className="header">
      <nav className="nav">
        <NavLink className="nav-link" to="/" onClick={() => goTo('/')}>
          Home
        </NavLink>
        <NavLink
          className="nav-link"
          to="/movies"
          onClick={() => goTo('/movies')}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
