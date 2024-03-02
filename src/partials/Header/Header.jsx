import { NavLink } from 'react-router-dom';
import '../Header/Header.css';
import useNavigation from '../../hooks/useNavigation';

const Header = () => {
  const { goTo } = useNavigation();

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
