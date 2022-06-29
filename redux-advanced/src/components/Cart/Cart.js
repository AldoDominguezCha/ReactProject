import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items);

  const cartItemsContent = cartItems.length > 0 
      ? cartItems.map(({ id, price, quantity, totalPrice, name }) => <CartItem key={id} item={{ id, title: name, quantity, total: totalPrice, price }}/>)
      : <p className={classes['centered-text']}>No items have been added to the cart yet!</p>


  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItemsContent}
      </ul>
    </Card>
  );
};

export default Cart;
