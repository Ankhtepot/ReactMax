import UserInputForm from "./Components/UserInput/UserInputForm/UserInputForm";
import UserList from "./Components/UserList/UserList/UserList";
import {useState} from "react";

function App() {

    let defaultUsers = [
        {userName: 'John Doe', age: 55},
        {userName: 'Ann Doe', age: 45},
    ]

    const [users, setUsers] = useState(defaultUsers);

    function onUserAddedHandler(newUser) {
        setUsers(prevUsers => {
            return [newUser, ...prevUsers];
        });
    }

    return (
        <div>
            <UserInputForm onUserAdded={onUserAddedHandler}/>
            <UserList users={users}/>
        </div>
    );
}

export default App;