import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

const Modal = props => {
    
    const modal = (
        <React.Fragment>
            <div onClick={props.onCloseCartButtonClick} className={styles.backdrop}></div>
            <div className={styles.modal}>
                <div className={styles.content}>
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    );

    return ReactDOM.createPortal(modal, document.getElementById('overlays'));
};

export default Modal;