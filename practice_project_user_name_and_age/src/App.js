import UserInputForm from "./Components/UserInput/UserInputForm/UserInputForm";
import UserList from "./Components/UserList/UserList/UserList";
import {useState} from "react";
import ModalInfo from "./Components/UI/ModalInfo/ModalInfo";
import ErrorMessage from "./Components/UI/ErrorMessage/ErrorMessage";

let defaultUsers = [];/* [
        {userName: 'John Doe', age: 55},
        {userName: 'Ann Doe', age: 45},
    ]*/

function App() {
    const [errorContent, setErrorContent] = useState(<div/>);
    const [users, setUsers] = useState(defaultUsers);

    function onUserAddedHandler(newUser) {
        setUsers(prevUsers => {
            return [newUser, ...prevUsers];
        });
    }

    function errorModalClickHandler() {
        setErrorContent(<div/>);
    }

    function showErrorHandler(title, message) {
        setErrorContent((
            <ModalInfo onClick={errorModalClickHandler}>
                <ErrorMessage title={title} message={message}/>
            </ModalInfo>));
    }

    return (
        <div>
            {errorContent}
            <UserInputForm onUserAdded={onUserAddedHandler} onError={showErrorHandler}/>
            <UserList users={users}/>
        </div>
    );
}

export default App;
