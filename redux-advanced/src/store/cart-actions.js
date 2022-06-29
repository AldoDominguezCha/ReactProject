import { uiActions } from "./ui-state-slice";
import { cartActions } from "./cart-state-slice";

export const fetchCartData = () => {
    return async (dispatch) => {

        const sendRequest = async () => {
            const response = await fetch('https://react-http-test-4d2b2-default-rtdb.firebaseio.com/cart.json');
            if(!response.ok) {
                throw new Error('Retrieving cart data failed.');
            }
            const data = await response.json();
            return data;
        };

        try {
            const cartData = await sendRequest();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity || 0,
            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Retrieving cart data failed!',
            }));
        }

    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!',
          }));

        const sendRequest = async () => {

            const response = await fetch('https://react-http-test-4d2b2-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                headers: {
                'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity,
                }),
            });

            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }
        }

        try {
            await sendRequest();
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!',
            }));
        }

        dispatch(uiActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sent cart data successfully',
        }));
    };
};

