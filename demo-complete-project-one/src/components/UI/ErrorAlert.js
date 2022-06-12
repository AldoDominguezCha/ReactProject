import React from "react";
import styles from './ErrorAlert.module.css';

const ErrorAlert = props => {

    const acceptErrorHandler = () => {
        props.onAccetpAlert();
    }; 

    return (
        <div className={styles.backdrop}>
                <div className={`${styles.modal} ${styles.bordered}`}>
                    <div className={styles.header}>
                        <h2>Invalid input</h2>
                    </div>
                    <div className={styles.content}>
                        {props.message}
                    </div>
                    <div className={styles.actions}>
                        <button onClick={acceptErrorHandler}>Ok</button>
                    </div>
            </div>
        </div>
    );
    
};

export default ErrorAlert;