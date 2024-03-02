import { NavLink } from 'react-router-dom';
import '../Header/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
