import classes from './ProfileForm.module.css';
import {useRef} from 'react';
import {useAuth} from '../../store/auth-context';
import {useHistory} from 'react-router-dom';

const ProfileForm = () => {
    const newPasswordInputRef = useRef();
    const authContext = useAuth();
    const history = useHistory();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredNewPassword = newPasswordInputRef.current.value;

        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${authContext.apiKey}`, {
            method: 'POST',
            body: JSON.stringify({
                idToken: authContext.token,
                password: enteredNewPassword,
                returnSecureToken: false
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                // assumption: Always succeeds!

                history.replace('/');
            });
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="new-password">New Password</label>
                <input type="password"
                       id="new-password"
                       ref={newPasswordInputRef}
                       minLength={6}
                />
            </div>
            <div className={classes.action}>
                <button>Change Password</button>
            </div>
        </form>
    );
};

export default ProfileForm;
