import React from 'react';
import styles from './UserItem.module.css';

const UserItem = props => {
    return (
        <li className={styles['main-container']}>
            <div className={styles['name-subcontainer']}>
                {props.name}
            </div>
            <div className={styles['age-subcontainer']}>
                {props.age}
            </div>
        </li>
    );
};

export default UserItem;