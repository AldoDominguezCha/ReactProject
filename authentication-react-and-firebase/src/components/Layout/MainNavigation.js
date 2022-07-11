import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../store/auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {

  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
  }

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {authCtx.isLoggedIn ? null : <li><Link to='/auth'>Login</Link></li> }
          {authCtx.isLoggedIn ? <li><Link to='/profile'>Profile</Link></li> : null}
          {authCtx.isLoggedIn ? <li><button onClick={logoutHandler}>Logout</button></li> : null}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
