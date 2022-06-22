import { useRef } from 'react';

import useInput from '../../hooks/use-input';

import classes from './Checkout.module.css';

const Checkout = props => {

    const {
        value: nameState,
        valueIsValid: nameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameState,
    } = useInput((name) => name.trim().length >= 3 && !(/\d/.test(name)));
    
    const {
        value: streetState,
        valueIsValid: streetIsValid,
        hasError: streetHasError,
        valueChangeHandler: streetChangeHandler,
        inputBlurHandler: streetBlurHandler,
        reset: resetStreetState,
    } = useInput((street) => street.trim().length >= 6 && /\d/.test(street));

    const {
        value: postalCodeState,
        valueIsValid: postalCodeIsValid,
        hasError: postalCodeHasError,
        valueChangeHandler: postalCodeChangeHandler,
        inputBlurHandler: postalCodeBlurHandler,
        reset: resetPostalCodeState,
    } = useInput((postalCode) => postalCode.trim().length === 5 && /^[0-9]+$/.test(postalCode));
    
    const {
        value: cityState,
        valueIsValid: cityIsValid,
        hasError: cityHasError,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
        reset: resetCityState,
    } = useInput((city) => city.trim().length >= 4 && !(/\d/.test(city)));
    
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const formIsValid = nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

    const submitOrderHandler = event => {
        event.preventDefault();

        if (!formIsValid) return;

        console.log(nameInputRef.current.value);
        console.log(streetInputRef.current.value);
        console.log(postalCodeInputRef.current.value);
        console.log(cityInputRef.current.value);

        props.onSubmitOrder({
            name: nameInputRef.current.value,
            street: streetInputRef.current.value,
            postalCode: postalCodeInputRef.current.value,
            city: cityInputRef.current.value
        });

        resetNameState();
        resetStreetState();
        resetPostalCodeState();
        resetCityState();
    } 

    return (
    <form className={classes.form} onSubmit={submitOrderHandler}>
        <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameInputRef} value={nameState} onChange={nameChangeHandler} onBlur={nameBlurHandler}/>
            {nameHasError && <p className={classes['error-text']}>The provided name is not valid.</p>}
        </div>
        <div className={classes.control}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' ref={streetInputRef} value={streetState} onChange={streetChangeHandler} onBlur={streetBlurHandler}/>
            {streetHasError && <p className={classes['error-text']}>The provided street is not valid.</p>}
        </div>
        <div className={`${classes.control} ${postalCodeHasError ? classes.invalid : null}`}>
            <label htmlFor='postal'>Postal Code</label>
            <input type='text' id='postal' ref={postalCodeInputRef} value={postalCodeState} onChange={postalCodeChangeHandler} onBlur={postalCodeBlurHandler}/>
            {postalCodeHasError && <p className={classes['error-text']}>The provided postal code is not valid.</p>}
        </div>
        <div className={`${classes.control} ${cityHasError ? classes.invalid : null}`}>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' ref={cityInputRef} value={cityState} onChange={cityChangeHandler} onBlur={cityBlurHandler}/>
            {cityHasError && <p className={classes['error-text']}>The provided city is not valid.</p>}
        </div>
        <div className={classes.actions}>
            <button type='button' onClick={props.onCancelOrder}>
                Cancel
            </button>
            <button className={classes.submit} disabled={!formIsValid}>Confirm</button>
        </div>
    </form>
    );

}

export default Checkout;