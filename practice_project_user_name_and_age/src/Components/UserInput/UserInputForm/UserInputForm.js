import {useState} from "react";
import styles from './UserInputForm.module.css';
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";

function UserInputForm(props) {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState(1);

    function userNameChangeHandler(event) {
        setEnteredUserName(event.target.value);
    }

    function ageChangedHandler(event) {
        setEnteredAge(event.target.value);
    }

    function submitHandler(event) {
        console.log('Form submitted.');
        event.preventDefault();

        if (!validateInput()) return;

        props.onUserAdded({userName: enteredUserName, age: enteredAge})
        setEnteredUserName('');
        setEnteredAge(1);
    }

    function validateInput() {
        if (enteredUserName.trim().length === 0) {
            return throwError( 'Please, enter valid user name.');
        } else if (+enteredAge <= 0) {
            return throwError('Please enter a valid age (> 0).');
        }

        return true;
    }

    function throwError(errorMessage) {
        props.onError('Invalid Input', errorMessage);
        return false;
    }

    return (
        <Card>
            <form onSubmit={submitHandler}>
                <div className={styles.wrapper}>
                    <label className={styles.label} htmlFor="username">User Name</label>
                    <input type='text'
                           onChange={userNameChangeHandler}
                           value={enteredUserName}
                           placeholder='Enter User Name'
                           className={styles.input}
                           id="username"
                    />
                    <label className={styles.label} htmlFor="age">Age</label>
                    <input type='number'
                           onChange={ageChangedHandler}
                           value={enteredAge}
                           className={styles.input}
                           id="age"
                    />
                </div>
                <div className={styles.wrapper}>
                    <Button type={"submit"}>Add User</Button>
                </div>
            </form>
        </Card>

    )
}

export default UserInputForm;