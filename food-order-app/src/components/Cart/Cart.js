import React, { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import Checkout from './Checkout';

import CartContext from '../../store/cart-context';

import styles from './Cart.module.css';

const Cart = props => {

    const [orderState, setOrderState] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const [errorState, setErrorState] = useState(null);
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

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        
        try {
            const response = await fetch('https://react-http-test-4d2b2-default-rtdb.firebaseio.com/orders.json', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    user: userData,
                    orderItems: cartCtx.items,
                }),
            });
            console.log(response);
            if (!response.ok) {
                throw new Error('Something went wrong submitting the order.');
            }
            setDidSubmit(true);
        } catch (error) {
            setErrorState(error.message);
        }
        setIsSubmitting(false);
        cartCtx.clearCart();
    }

    const cartItems = (
        <ul className={styles['cart-items']}> {cartCtx.items.map((item) => <CartItem name={item.name} price={item.price} amount={item.amount} key={item.id} onAdd={cartItemAddHandler.bind(null, item)} onRemove={cartItemRemoveHandler.bind(null, item.id)}/>)}</ul>
    );

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const cartHasItems = cartCtx.items.length > 0;

    const modalActions = (
    <div className={styles.actions}>
        <button onClick={closeCartButtonHandler} className={styles['button--alt']}>Close</button>
        {cartHasItems && <button onClick={() => setOrderState(true)} className={styles.button}>Order</button>}
    </div> );

    const cartModalContent = (
        <React.Fragment>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {orderState && <Checkout onSubmitOrder={submitOrderHandler} onCancelOrder={closeCartButtonHandler} />}
            {!orderState && modalActions}
        </React.Fragment>
    );

    const isSubmittingModalContent = <p className={styles['centered-message']}>Placing your order...</p>;
    const didSubmitModalContent = (
        <React.Fragment>
            <p className={styles['centered-message']}>The order was successfully placed!</p>
            <div className={styles.actions}>
                <button onClick={closeCartButtonHandler} className={styles.button}>Close</button>
            </div>
        </React.Fragment>
    );
    const errorSubmittingModalContent = (
        <React.Fragment>
            <p className={`${styles['centered-message']} ${styles['error-text']}`}>Error. {errorState}. Please try again :(</p>
            <div className={styles.actions}>
                <button onClick={closeCartButtonHandler} className={styles.button}>Close</button>
            </div>
        </React.Fragment>
    );

    return (
        <Modal onCloseCartButtonClick={closeCartButtonHandler}>
            {!isSubmitting && !didSubmit && !errorState && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && errorState && errorSubmittingModalContent}
            {!isSubmitting && didSubmit && !errorState && didSubmitModalContent}
        </Modal>
    );
};

export default Cart;