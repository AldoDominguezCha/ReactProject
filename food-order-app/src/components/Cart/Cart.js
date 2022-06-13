import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import styles from './Cart.module.css';

const Cart = props => {

    const cartCtx = useContext(CartContext);

    const closeCartButtonHandler = () => {
        props.onCloseButtonClick(false);
    };

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1});
    };

    const cartItems = (
        <ul className={styles['cart-items']}> {cartCtx.items.map((item) => <CartItem name={item.name} price={item.price} amount={item.amount} key={item.id} onAdd={cartItemAddHandler.bind(null, item)} onRemove={cartItemRemoveHandler.bind(null, item.id)}/>)}</ul>
    );

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const cartHasItems = cartCtx.items.length > 0;

    return (
        <Modal onCloseCartButtonClick={closeCartButtonHandler}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button onClick={closeCartButtonHandler} className={styles['button--alt']}>Close</button>
                {cartHasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;