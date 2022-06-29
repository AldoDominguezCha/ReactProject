import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-state-slice';
import cartSlice from './cart-state-slice';

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer,
    }
});

export default store;