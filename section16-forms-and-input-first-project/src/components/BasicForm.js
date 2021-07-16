// import useInput from "../hooks/use-input";
import useInputReducer from "../hooks/use-inputReducer";

const BasicForm = (props) => {
    const {
        value: enteredNameValue,
        valueIsValid: enteredNameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameInputBlurHandler,
        reset: resetName
    // } = useInput(value => value.trim() !== '');
    } = useInputReducer(value => value.trim() !== '');

    const {
        value: enteredSurnameValue,
        valueIsValid: enteredSurnameIsValid,
        hasError: surnameHasError,
        valueChangeHandler: surnameChangeHandler,
        inputBlurHandler: surnameInputBlurHandler,
        reset: resetSurname
    // } = useInput(value => value.trim() !== '');
    } = useInputReducer(value => value.trim() !== '');

    const {
        value: enteredEmailValue,
        valueIsValid: enteredEmailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailInputBlurHandler,
        reset: resetEmail
    // } = useInput(value => /^[^\s@]+@[^\s@]+$/.test(value.trim()));
    } = useInputReducer(value => /^[^\s@]+@[^\s@]+$/.test(value.trim()));

    const formIsValid = enteredNameIsValid
        && enteredSurnameIsValid
        && enteredEmailIsValid;

    function formSubmissionHandler(event) {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }

        console.log(enteredNameValue, enteredSurnameValue, enteredEmailValue);

        resetName();
        resetSurname();
        resetEmail();
    }

    const setInputClasses = isInvalid => isInvalid
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='control-group'>
                <div className={setInputClasses(nameHasError)}>
                    <label htmlFor='name'>First Name</label>
                    <input type='text'
                           id='name'
                           value={enteredNameValue}
                           onChange={nameChangeHandler}
                           onBlur={nameInputBlurHandler}
                    />
                    {nameHasError && <p className="error-text">Name must not be empty.</p>}
                </div>

                <div className={setInputClasses(surnameHasError)}>
                    <label htmlFor='surname'>Last Name</label>
                    <input type='text'
                           id='surname'
                           value={enteredSurnameValue}
                           onChange={surnameChangeHandler}
                           onBlur={surnameInputBlurHandler}
                    />
                    {surnameHasError && <p className="error-text">Surname must not be empty.</p>}
                </div>

                <div className={setInputClasses(emailHasError)}>
                    <label htmlFor='email'>Last Name</label>
                    <input type='email'
                           id='email'
                           value={enteredEmailValue}
                           onChange={emailChangeHandler}
                           onBlur={emailInputBlurHandler}
                    />
                    {emailHasError && <p className="error-text">Email must have valid format.</p>}
                </div>
            </div>

            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
