import React, { useContext, useRef } from 'react';

import Input from '../../UI/Input';
import CartContext from './../../../store/cart-context';

import styles from './MealItemForm.module.css';

const MealItemForm = props => {

    const cartCtx = useContext(CartContext);
    const inputReference = useRef();

    const submitHandler = event => {
       event.preventDefault();
        const amountAsString = inputReference.current.value;
        const amount = parseInt(amountAsString);
        if(amountAsString.trim().length === 0 || amount < 1 || amount > 5) {
            return;
        }

       cartCtx.addItem({
           ...props.mealInfo,
           amount,
       });
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input 
                ref={inputReference}
                input={{ 
                    id: 'amount' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }} 
            />
            <button>+ Add</button>
        </form>
    );
};

export default MealItemForm;