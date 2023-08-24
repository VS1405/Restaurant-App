import React, { useState } from 'react';

import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const ShowCartHandler = ()=>{
    setCartIsShown(true)
  }
  const HideCartShownHandler =()=>{
    setCartIsShown(false);
  }


  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={HideCartShownHandler}/>}
        <Header onShowCart = {ShowCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
