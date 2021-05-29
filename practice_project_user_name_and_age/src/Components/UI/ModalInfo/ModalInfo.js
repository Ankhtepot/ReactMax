import styles from './ModalInfo.module.css';

function ModalInfo(props) {
    return (
        <div className={styles.modal} onClick={props.onClick}>
            {props.children}
            <div className={styles.modalOverlay}/>
        </div>
    )
}

export default ModalInfo;