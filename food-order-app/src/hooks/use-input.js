import { useReducer } from 'react';

const initialInputState = {
    value: '',
    isTouched: false,
}

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return { value: action.value, isTouched: state.isTouched }
    }
    if (action.type === 'BLUR') {
        return { value: state.value, isTouched: true }
    }
    if (action.type === 'RESET') {
        return { value: '', isTouched: false }
    }
    return initialInputState;
};

const useInput = (validateValueFn) => {
    const [inputState, dispatchInputState] = useReducer(inputStateReducer, initialInputState);

    const valueIsValid = validateValueFn(inputState.value);
    const hasError = inputState.isTouched && !valueIsValid;

    const valueChangeHandler = event => {
        dispatchInputState({
            type: 'INPUT',
            value: event.target.value,
        });
    };

    const inputBlurHandler = () => {
        dispatchInputState({ type: 'BLUR' });
    };

    const reset = () => {
        dispatchInputState({ type: 'RESET' })
    };

    return {
        value: inputState.value,
        valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };  
};

export default useInput;