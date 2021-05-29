import {useState} from "react";
import styles from './UserInputForm.module.css';
import Button from "../../UI/Button/Button";
import ModalInfo from "../../UI/ModalInfo/ModalInfo";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";

function UserInputForm(props) {
    const [enteredUserName, setUserName] = useState('');
    const [enteredAge, setAge] = useState(1);
    const [errorContent, setErrorContent] = useState();

    function userNameChangeHandler(event) {
        setUserName(event.target.value);
    }

    function ageChangedHandler(event) {
        setAge(event.target.value);
    }

    function submitHandler() {
        console.log('Form submitted.');

        if (!validateInput()) return;

        props.onUserAdded({userName: enteredUserName, age: enteredAge})
        setUserName('');
        setAge(1);
    }

    function modalClickHandler() {
        setErrorContent(<div/>);
    }

    function validateInput() {
        let errorMessage = '';

        if (enteredUserName === '') {
            errorMessage = 'Please, enter valid user name.';
        } else if (enteredAge <= 0) {
            errorMessage = 'Please enter a valid age (> 0).';
        }

        return setError(errorMessage);
    }

    function setError(errorMessage) {
        const doShowError = errorMessage !== '';
        if (!doShowError) {
            setErrorContent(<div/>);
            return true;
        }

        setErrorContent((
            <ModalInfo onClick={modalClickHandler}>
                <ErrorMessage title = {'Invalid Input'} message = {errorMessage}/>
            </ModalInfo>));

        return false;
    }

    return (
        <div>
            {errorContent}
            <div className={styles.wrapper}>
                <label className={styles.label}>User Name</label>
                <input type='text'
                       onChange={userNameChangeHandler}
                       value={enteredUserName}
                       placeholder='Enter User Name'
                       className={styles.input}
                />
            </div>
            <div className={styles.wrapper}>
                <label className={styles.label}>Age</label>
                <input type='number'
                       onChange={ageChangedHandler}
                       value={enteredAge}
                       className={styles.input}
                />
            </div>
            <div className={styles.wrapper}>
                <Button onClick={submitHandler}>Add User</Button>
            </div>
        </div>

    )
}

export default UserInputForm;