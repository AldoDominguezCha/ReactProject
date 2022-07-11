import { useRef, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const newPasswordInputRef = useRef();
  const history = useHistory();

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!authCtx.token) {
      throw new Error('You must be authenticated to perform this request');
    }

    const enteredNewPassword = newPasswordInputRef.current.value;
    setIsLoading(true);
    try {
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBG5Cmnvn131QzyCRTRaJBgUpyUy4wWbT0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false
        })
      });
      const data = await response.json();
      setIsLoading(false);
      console.log(data);
      if(!response.ok) {
        throw new Error(data.error.message);
      }
      history.replace('/');
    } catch (error) {
      setIsLoading(false);
      alert(error.message); 
    }
    

  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        {!isLoading && <button>Change Password</button>}
        {isLoading && <p>Processing the request...</p>}
      </div>
    </form>
  );
}

export default ProfileForm;
