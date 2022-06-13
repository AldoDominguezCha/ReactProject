import React from 'react';

import { useContext, useEffect, useState } from 'react';

import CartIcon from './../Cart/CartIcon';
import CartContext from './../../store/cart-context';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const numberOfCarItems = cartCtx.items.reduce((acc, current) => acc + current.amount, 0);

    const cartButtonClickHandler = () => {
        props.onClick(true);
    }

    const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

    useEffect(() => {
        if (cartCtx.items.length === 0) return;
        setBtnIsHighlighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [cartCtx.items]);

    return (
        <button onClick={cartButtonClickHandler} className={btnClasses}>
            <span className={styles.icon}><CartIcon/></span>   
            <span>Your cart</span>   
            <span className={styles.badge}>
                {numberOfCarItems}
            </span>   
        </button>
    );
};

export default HeaderCartButton;