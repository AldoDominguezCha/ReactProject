import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false,
    },
    reducers: {
        replaceCart(state, action) {
            state.items = action.payload.items;    
            state.totalQuantity = action.payload.totalQuantity;
        },
        addItemToCart(state, action) {
            state.changed = true;
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id, 
                    price: newItem.price, 
                    quantity: 1, 
                    totalPrice: newItem.price,
                    name: newItem.title 
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price; 
            }
        },
        removeItemFromCart(state, action) {
            state.changed = true;
            const id = action.payload;
            const existingItem = state.items.find(el => el.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(el => el.id !== id);
            }
            existingItem.quantity--;
            existingItem.totalPrice -= existingItem.price;
        },

    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;