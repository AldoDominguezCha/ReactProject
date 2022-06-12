import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';

import styles from './Cart.module.css';

const Cart = props => {

    const cartCtx = useContext(CartContext);

    const closeCartButtonHandler = () => {
        props.onCloseButtonClick(false);
    };

    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartCtx.items.map(({id, name, amount, price, description}) => <li>{name} - {amount}</li>)}
        </ul>
    );

    return (
        <Modal onCloseCartButtonClick={closeCartButtonHandler}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{cartCtx.totalAmount.toFixed(2)}</span>
            </div>
            <div className={styles.actions}>
                <button onClick={closeCartButtonHandler} className={styles['button--alt']}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;