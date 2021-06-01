import styles from './Button.module.css';

function Button(props) {
    return (
        <button className={styles.Button}
                onClick={props.onClick}
                type={props.type || 'button'}
        >
            {props.children}
        </button>
    )
}

export default Button;

