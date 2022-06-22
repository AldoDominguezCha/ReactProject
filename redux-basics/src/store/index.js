import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter-state-slice';
import authSlice from './auth-state-slice';

// const storeReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter : state.counter + 1,
//             showCounter: state.showCounter,
//         }
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         }
//     }
//     if (action.type === 'increase_by_amount') {
//         return { 
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter, 
//         }
//     }
//     if (action.type === 'toggle_counter') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter,
//         }
//     }
//     return initialState;
// };



const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;