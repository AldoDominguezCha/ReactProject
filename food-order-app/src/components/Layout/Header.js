import React from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from './../../assets/meals.jpeg';
import styles from './Header.module.css';

const Header = props => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onOpenCartClick}/>
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="A table full of delcious food!"/>
            </div>
        </React.Fragment>
    );
};

export default Header;