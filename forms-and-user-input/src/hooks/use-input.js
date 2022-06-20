import { useState } from 'react';

const useInput = (validateValueFn) => {
    const [enteredValue, setEnteredValue] = useState(''); 
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValueFn(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = event => {
        setIsTouched(true);
    };

    const resetInput = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        valueIsValid,
        resetInput,
    };
};

export default useInput;