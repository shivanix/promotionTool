import Card from "./Card";
import styles from './Modal.module.css'
import {createPortal} from "react-dom";
import AddBranch from "./AddBranch";

// This is the backdrop that shows behind the overlay,
// Prevents user from interacting with page before closing it
const Backdrop = (props) => {
    return (
        <div className={styles.backdrop} onClick={props.onConfirm}/>
    );
};

const ModalOverlay = (props) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
                {/*{props.form}*/}
                <AddBranch/>
            </div>
            <footer className={styles.actions}>
                <button onClick={props.onConfirm}>Cancel</button>
            </footer>
        </Card>
    );
};

const Modal = (props) => {


    return (
        <>
            {createPortal(<Backdrop onConfirm={props.onConfirm}/>,
                document.getElementById('backdrop-root'))}
            {createPortal(<ModalOverlay
                title={props.title}
                message={props.message}
                // form={props.form}
                onConfirm={props.onConfirm
                }/>, document.getElementById('overlay'))}
        </>
    );
};

export default Modal;