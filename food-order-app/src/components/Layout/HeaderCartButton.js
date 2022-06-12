import React from 'react';

import { useContext } from 'react';

import CartIcon from './../Cart/CartIcon';
import CartContext from './../../store/cart-context';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = props => {

    const cartCtx = useContext(CartContext);
    const numberOfCarItems = cartCtx.items.reduce((acc, current) => acc + current.amount, 0);

    const cartButtonClickHandler = () => {
        props.onClick(true);
    }

    return (
        <button onClick={cartButtonClickHandler} className={styles.button}>
            <span className={styles.icon}><CartIcon/></span>   
            <span>Your cart</span>   
            <span className={styles.badge}>
                {numberOfCarItems}
            </span>   
        </button>
    );
};

export default HeaderCartButton;