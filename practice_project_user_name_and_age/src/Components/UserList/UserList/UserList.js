import UserItem from "../UserItem/UserItem";
import styles from './UserList.module.css';
import Card from "../../UI/Card/Card";

function UserList(props) {
    return (
        <Card>
            <ul className={styles.userList}>
                {props.users.map(user => {
                    return (
                        <UserItem key={Math.random().toString()}
                                  userName={user.userName}
                                  age={user.age}
                        />
                    )
                })}
            </ul>
        </Card>
    )
}

export default UserList;