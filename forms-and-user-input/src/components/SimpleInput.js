import useInput from '../hooks/use-input';

const SimpleInput = (props) => {


  const {
    value: enteredName,
    hasError: nameInputIsInvalid,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    valueIsValid: enteredNameIsValid,
    setEnteredValue: setEnteredName,
    setIsTouched: setNameInputTouched,
  } = useInput((name) => name.trim().length >= 3); 
  
  const {
    value: enteredEmail,
    hasError: emailInputIsInvalid,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    valueIsValid: enteredEmailIsValid,
    setEnteredValue: setEnteredEmail,
    setIsTouched: setEmailInputTouched,
  } = useInput((email) => email.trim().length >= 8 && email.trim().includes('@')); 

  
  
  const formIsValid = enteredNameIsValid && enteredEmailIsValid;
  

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName('');
    setEnteredEmail('');
    setNameInputTouched(false);
    setEmailInputTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';
  
    const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} onBlur={nameInputBlurHandler}/>
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-mail</label>
        <input type='email' id='email' onChange={emailInputChangeHandler} value={enteredEmail} onBlur={emailInputBlurHandler}/>
        {emailInputIsInvalid && <p className="error-text">The e-mail provided is not valid.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
