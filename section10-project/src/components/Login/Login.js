import React, {useEffect, useReducer, useState, useContext, useRef} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {value: action.val, isValid: action.val.includes('@')};
    }
    if (action.type === 'INPUT_BLUR') {
        return {value: state.value, isValid: state.value.includes('@')};
    }

    return {value: '', isValid: false};
};

function passwordReducer(state, action) {
    if (action.type === 'USER_INPUT') {
        return {value: action.val, isValid: action.val.length > 6};
    }
    if (action.type === 'INPUT_BLUR') {
        return {value: state.value, isValid: state.value > 6};
    }

    return {value: '', isValid: false};
}

const Login = (props) => {
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});

    const authContext = useContext(AuthContext);

    const emailInputRef = useRef();

    const passwordInputRef = useRef();

    // const { isValid: emailIsValid } = emailState;
    // const { isValid: passwordIsValid } = passwordState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log('Checking for validity');
            setFormIsValid(
                // emailIsValid && passwordIsValid
                emailState.isValid && passwordState.isValid
            );
        }, 500);

        return () => {
            console.log('CLEANUP');
            clearTimeout(identifier);
        }; // Cleanup function
        // }, [emailIsValid, passwordIsValid]);
    }, [emailState.isValid, passwordState.isValid]);


    const emailChangeHandler = (event) => {
        dispatchEmail({type: 'USER_INPUT', val: event.target.value});

        // setFormIsValid(
        //     event.target.value.includes('@') && passwordState.value.trim().length > 6
        // );
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({type: 'USER_INPUT', val: event.target.value});

        // setFormIsValid(
        //     event.target.value.includes('@') && passwordState.value.trim().length > 6
        // );
    };

    const validateEmailHandler = () => {
        dispatchEmail({type: 'INPUT_BLUR'});
    };

    const validatePasswordHandler = () => {
        dispatchPassword({type: 'INPUT_BLUR'});
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid) {
            authContext.onLogin(emailState.value, passwordState.value);
        } else if (!emailState.isValid) {
            emailInputRef.current.fucus();
        } else if (!passwordState.isValid) {
            passwordInputRef.current.focus();
        }
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    ref={emailInputRef}
                    id='email'
                    label='E-Mail'
                    type='email'
                    isValid={emailState.isValid}
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                />
                <Input
                    ref={passwordInputRef}
                    id='password'
                    label='Password'
                    type='password'
                    isValid={passwordState.isValid}
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
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
