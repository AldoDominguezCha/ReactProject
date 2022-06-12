import React from 'react';
import UserItem from './../UsersItem/UserItem';
import styles from './UsersList.module.css';

const UsersList = props => {

    return (
        <div className={styles['user-list-main-container']}>
            <div className={styles['user-list-title']}>
                <div className={styles['name-header']}>
                    Name
                </div>
                <div className={styles['age-header']}>
                    Age
                </div>
            </div>
            <ul className={styles['users-list-container']}>
                {props.users.map(user => <UserItem name={user.name} age={user.age} key={user.id}/>)}
            </ul>
        </div>
    );

};

export default UsersList;