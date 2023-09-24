import { NavLink } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  return (
    <nav className='navBar'>
      <NavLink className='link' to='/'>
        Home
      </NavLink>
      <NavLink className='link' to='/favorites'>
        Favorites
      </NavLink>
    </nav>
  );
}

export default NavBar;
