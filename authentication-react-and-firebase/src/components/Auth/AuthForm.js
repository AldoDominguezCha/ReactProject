import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();
  
  const signUserRequest = async (type, email, password) => {

    if (type !== 'signIn' && type !== 'signUp') {
      throw new Error('Unsupported request type.');
    }

    const endpoint =  type === 'signIn' ? 'signInWithPassword' : 'signUp';

    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:${endpoint}?key=AIzaSyBG5Cmnvn131QzyCRTRaJBgUpyUy4wWbT0`, {
      method: 'POST',
      headers: {
        'Content-Type' : "application/json"
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      }) 
    });
    const data = await response.json();
    if(!response.ok) {
      setIsLoading(false);
      throw new Error(data.error.message);
    }
    setIsLoading(false);
    return data;
  };


  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    try {
      const responseData = await signUserRequest(isLogin ? 'signIn' : 'signUp', enteredEmail, enteredPassword);
      const expirationTimestamp = new Date(new Date().getTime() + (+responseData.expiresIn * 1000));
      authCtx.login(responseData.idToken, expirationTimestamp.toISOString());
      history.replace('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Processing the request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
