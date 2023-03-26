import React, { Fragment, useState } from 'react';

import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const ShowCartHandler = ()=>{
    setCartIsShown(true)
  }
  const HideCartShownHandler =()=>{
    setCartIsShown(false);
  }


  return (
    <Fragment>
      {cartIsShown && <Cart onClose={HideCartShownHandler}/>}
      <main>
        <Header onShowCart = {ShowCartHandler}/>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
