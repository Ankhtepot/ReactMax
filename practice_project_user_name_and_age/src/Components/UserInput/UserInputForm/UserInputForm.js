import {useState} from "react";
import styles from './UserInputForm.module.css';
import Button from "../../UI/Button/Button";
import ModalInfo from "../../UI/ModalInfo/ModalInfo";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";
import Card from "../../UI/Card/Card";

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

    function submitHandler(event) {
        console.log('Form submitted.');
        event.preventDefault();

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
                <ErrorMessage title={'Invalid Input'} message={errorMessage}/>
            </ModalInfo>));

        return false;
    }

    return (
        <Card>
            <form onSubmit={submitHandler}>
                {errorContent}
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