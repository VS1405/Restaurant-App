import React, { useContext } from 'react';

import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartsItem from './CartsItem'
import CartContext from '../../store/cart-context';

const Cart = (props) => {

  const cartCtx = useContext(CartContext)
  const totalAmount = `$${cartCtx.totalAmmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const cartItemAddHandler=(item)=>{
    cartCtx.addItemOnCart({...item, amount : 1})
  };
  const cartItemRemoveHandler =  (id)=>{
    cartCtx.removeItemFromCart(id)
  }

  const cartItem = <ul className={classes['cart-items']}>
    {cartCtx.items.map((item) =>
      <CartsItem
        key={item.id}
        id={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />)
    }
  </ul>

  return (
    <Modal onClose={props.onClose}>
      
      {cartItem} 

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default React.memo(Cart)
