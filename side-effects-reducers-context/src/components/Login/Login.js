import React, { useReducer, useEffect, useRef } from 'react';

import Card from '../UI/Card/Card';
import Input from './Input';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';


const validityReducer = (state, action) => {
  if(action.type === 'EMAIL_INPUT') {
    return { 
      ...state, 
      emailValue: action.changedValue, 
      emailIsValid: action.changedValue.includes('@') && action.changedValue.length > 5,
    };
  }
  else if (action.type === 'PASSWORD_INPUT') {
    return { 
      ...state, 
      passwordValue: action.changedValue, 
      passwordIsValid: action.changedValue.trim().length > 5,
    };
  }
  else if(action.type === 'EMAIL_BLUR') {
    return { 
      ...state,
      emailIsValid: state.emailValue.includes('@') && state.emailValue.length > 5,  
    };
  }
  else if(action.type === 'PASSWORD_BLUR') {
    return {
      ...state,
      passwordIsValid: state.passwordValue.trim().length > 5,
    };
  }
  else if (action.type === 'FORM_VALIDITY') {
    return {
      ...state,
      formIsValid: state.emailIsValid && state.passwordIsValid,
    };
  }

};

const Login = (props) => {

  const [validityState, dispatchValidity] = useReducer(validityReducer, {
    emailValue: '',
    passwordValue: '',
    emailIsValid: null,
    passwordIsValid: null,
    formIsValid: false,
  });

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const { emailValue, passwordValue } = validityState;

  useEffect(() => {

    const checkTimeout = setTimeout(() => {
      console.log('SIDE EFFECT TO CHECK FORM VALIDITY');
      dispatchValidity({ type: 'FORM_VALIDITY' });
    }, 1000);

    return () => {
      console.log('Clean up from previous side effect');
      clearTimeout(checkTimeout);
    }

  }, [emailValue, passwordValue]);

  const emailChangeHandler = (event) => {
    dispatchValidity({
      type: 'EMAIL_INPUT',
      changedValue: event.target.value,
    });
  };

  const passwordChangeHandler = (event) => {
    dispatchValidity({
      type: 'PASSWORD_INPUT',
      changedValue: event.target.value,
    });
  };

  const validateEmailHandler = event => {
    dispatchValidity({ type: 'EMAIL_BLUR' });
  };
  
  const validatePasswordHandler = () => {
    dispatchValidity({ type: 'PASSWORD_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (validityState.formIsValid) {
      props.onLogin(validityState.emailValue, validityState.passwordValue);
    } else if (!validityState.emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef} 
          inputType="email"
          inputLabelContent="E-Mail"
          inputId="email"
          inputHtmlFor="email"
          isInputValid={validityState.emailIsValid}
          inputValue={validityState.emailValue}
          onInputChange={emailChangeHandler}
          onInputBlur={validateEmailHandler}
        />
        <Input
        ref={passwordInputRef} 
          inputType="password"
          inputLabelContent="Password"
          inputId="password"
          inputHtmlFor="password"
          isInputValid={validityState.passwordIsValid}
          inputValue={validityState.passwordValue}
          onInputChange={passwordChangeHandler}
          onInputBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
