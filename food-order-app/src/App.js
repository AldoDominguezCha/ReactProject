import React, {useState, useEffect} from 'react';

import Meals from './components/Meals/Meals';
import Header from "./components/Layout/Header";
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {

  const [carDisplayedState, setCarDisplayedState] = useState(false);

  const cartStateChangeHandler = isCarDisplayed => {
    setCarDisplayedState(isCarDisplayed);
  };

  useEffect(() => {

  }, [])

  return (
    <CartProvider>
        {carDisplayedState && <Cart onCloseButtonClick={cartStateChangeHandler}/>}
        <Header onOpenCartClick={cartStateChangeHandler}/>
        <main>
          <Meals/>
        </main>
    </CartProvider>
  );
}

export default App;
