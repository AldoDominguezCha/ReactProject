import { useSelector, useDispatch } from 'react-redux';

import { authActions } from '../store';

import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const authenticatedNavbar = (
    <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={() => dispatch(authActions.logout())}>Logout</button>
          </li>
        </ul>
      </nav>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && authenticatedNavbar}
    </header>
  );
};

export default Header;
