import styles from './UserItem.module.css';

function UserItem(props) {
    return (
        <div className={styles.userItem}>
            <p style={{margin: '0.5rem'}}>
                {props.userName} ({props.age} years old)
            </p>
        </div>
    )
}

export default UserItem;