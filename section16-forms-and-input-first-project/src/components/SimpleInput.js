import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    const {
        value: enteredName,
        valueIsValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandle,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredEmail,
        valueIsValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandle,
        reset: resetEmailInput
    } = useInput(value => /^[^\s@]+@[^\s@]+$/.test(value.trim()));

    const formIsValid = enteredNameIsValid && enteredEmailIsValid;

    const formSubmissionHandler = event => {
        event.preventDefault();

        if (nameInputHasError || emailInputHasError) {
            return;
        }

        console.log(enteredName);
        console.log(enteredEmail);

        // nameInputRef.current.value = ''; // NOT IDEAL, DON'T MANIPULATE THE DOM
        resetNameInput();
        resetEmailInput();
    };

    const setInputClasses = isInvalid => isInvalid
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={setInputClasses(nameInputHasError)}>
                <label htmlFor='name'>Your Name</label>
                <input type='text'
                       id='name'
                       onChange={nameChangeHandler}
                       onBlur={nameBlurHandle}
                       value={enteredName}
                />
                {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
            </div>
            <div className={setInputClasses(emailInputHasError)}>
                <label htmlFor='email'>Your Email</label>
                <input type='email'
                       id='email'
                       onChange={emailChangeHandler}
                       onBlur={emailBlurHandle}
                       value={enteredEmail}
                />
                {emailInputHasError &&
                <p className="error-text">Email must not be empty and must be valid e-mail address.</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
