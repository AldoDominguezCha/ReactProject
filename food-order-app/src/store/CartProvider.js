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

    if (action.type === 'REMOVE_ITEM') {
        let updatedItems = [...state.items];
        const targetObjectIndex = updatedItems.findIndex(obj => obj.id === action.id);
        const updatedTotalAmount = state.totalAmount - updatedItems[targetObjectIndex].price;

        if (state.items[targetObjectIndex].amount === 1) {
            updatedItems = updatedItems.filter(obj => obj.id !== action.id);
        }

        else {
            updatedItems[targetObjectIndex].amount--;
        }

        return {
            items: updatedItems,
            totalAmount: Math.abs(updatedTotalAmount),
        }
    }

    if (action.type === 'CLEAR_CART') {
        return defaultCartState;
    }

    return defaultCartState;
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

        const targetObjectIndex = cartState.items.findIndex(obj => obj.id === id);
        if (cartState.items[targetObjectIndex].amount <= 0) return;

        dispatchCartAction({
            type: 'REMOVE_ITEM',
            id,
        });
    };

    const clearCart = () => {
        dispatchCartAction({
            type: 'CLEAR_CART',
        });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;

