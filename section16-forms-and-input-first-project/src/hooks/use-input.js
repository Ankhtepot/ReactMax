import {useState} from "react";

const useInput = (validationFn) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validationFn(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value);
    }

    const inputBlurHandler = () => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        valueIsValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
}

export default useInput;