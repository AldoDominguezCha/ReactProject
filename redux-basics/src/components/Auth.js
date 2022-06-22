import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { authActions } from '../store';

import classes from './Auth.module.css';

const Auth = () => {

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const dispatch = useDispatch();
  
  const submitHandler = event => {
    event.preventDefault();

    const emailValue = emailInputRef.current.value;
    const passwordValue = passwordInputRef.current.value;

    const authInfoIsValid = emailValue.trim().length >= 6 && emailValue.includes('@') && passwordValue.trim().length >= 4

    if (!authInfoIsValid) {
      return;
    }

    dispatch(authActions.login());

  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>

          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailInputRef}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passwordInputRef}/>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
