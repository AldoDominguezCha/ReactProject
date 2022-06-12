import React, { useState } from 'react';
import styles from './AddUserForm.module.css';

const AddUserForm = props => {

    const iniitalState = {
        name: '',
        age: '',
    };
    const [userData, setUserData] = useState(iniitalState);

    const submitFormHandler = event => {
        event.preventDefault();
        setUserData(iniitalState);
        props.onUserAddition(userData);
    }

    const nameChangeHandler = event => {
        setUserData(prevState => ({
            ...prevState,
            name: event.target.value,
        }));
    };

    const ageChangeHandler = event => {
        setUserData(prevState => ({
            ...prevState,
            age: event.target.value,
        }))
    };

    return (
        <div className={styles['new-user__controls']}>
            <form onSubmit={submitFormHandler}>
                <div className={styles['new-user__control']}>
                    <label>New user's name:</label>
                    <input type='text' value={props.name} onChange={nameChangeHandler}></input>
                </div>
                <div className={styles['new-user__control']}>
                    <label>New user's age:</label>
                    <input type='number' value={props.age} onChange={ageChangeHandler}></input>
                </div>
                <div className={styles['cenetered-content-container']}>
                    <button type='submit'>Add user</button>
                </div>
            </form>
        </div>
    );

};

export default AddUserForm;