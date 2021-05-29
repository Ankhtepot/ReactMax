import UserItem from "../UserItem/UserItem";
import styles from './UserList.module.css';

function UserList(props) {
    return (
        <ul className={styles.userList}>
            {props.users.map(user => {
                return (
                    <UserItem key = {Math.random().toString()}
                              userName = {user.userName}
                              age = {user.age}
                    />
                )
            })}
        </ul>
    )
}

export default UserList;