import useInput from "../hooks/use-input";

const BasicForm = (props) => {

  const {
    value: nameState,
    hasError: nameErrorState,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    valueIsValid: nameIsValid,
    resetInput: resetNameInput,
  } = useInput(name => name.trim().length >= 3);
  
  const {
    value: lastNameState,
    hasError: lastNameErrorState,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    valueIsValid: lastNameIsValid,
    resetInput: resetLastNameInput,
  } = useInput(lastName => lastName.trim().length >= 4);
  
  const {
    value: emailState,
    hasError: emailErrorState,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    valueIsValid: emailIsValid,
    resetInput: resetEmailInput,
  } = useInput(email => email.trim().length >= 8 && email.includes('@'));

  const formIsValid = nameIsValid && lastNameIsValid && emailIsValid;

  const submitFormHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(`Form accepted!`);
    console.log(`Complete name: ${lastNameState}, ${nameState}. Email address: ${emailState}.`);
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={nameErrorState ? 'form-control invalid' : 'form-control'}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={nameState}/>
          {nameErrorState && <p className="error-text">The name provided is not valid.</p>}
        </div>
        <div className={lastNameErrorState ? 'form-control invalid' : 'form-control'}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={lastNameState}/>
          {lastNameErrorState && <p className="error-text">The last name provided is not valid.</p>}
        </div>
      </div>
      <div className={emailErrorState ? 'form-control invalid' : 'form-control'}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={emailState}/>
        {emailErrorState && <p className="error-text">The email provided is not valid.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
