import React from 'react';

import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        let updatedItems = [];
        if (state.items.reduce((acc, current) => acc.concat(current.name), []).includes(action.item.name)) {
            updatedItems = [...state.items];
            for (const item of updatedItems) {
                if (item.name === action.item.name) {
                    item.amount += action.item.amount;
                }
            }
        }
        else {
            updatedItems = [...state.items, action.item];
        }
        const updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
};

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item,
        });
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            id,
        });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;

