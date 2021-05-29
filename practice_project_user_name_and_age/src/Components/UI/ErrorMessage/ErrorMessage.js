import styles from './ErrorMessage.module.css';

function ErrorMessage(props) {
    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <p className={styles.titleP}>{props.title}</p>
                </div>
                <div className={styles.message}>
                    <p className={styles.messageP}>{props.message}</p>
                </div>
            </div>
        </div>
    )
}

export default ErrorMessage;