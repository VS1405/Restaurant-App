import React from 'react';

import classes from './Cart.module.css';
import Modal from '../UI/Modal';


const cartItem = <ul className={classes['cart-items']}>{ [{id: 'c1', name: 'sushi', price: 39.69}].map((item) => <li>{item.name}</li>)}</ul>

const Cart = (props) => {

  return (
    <Modal>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.50</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
