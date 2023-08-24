import classes from './CartsItem.module.css'
import React from 'react'

const CartsItem = (props) => {

    const price = `$${props.price.toFixed(2)}`;

    return (
        <li>
            <div className={classes['cart-item']}>
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{price}</span>
                    <span className={classes.amount}>x {props.amount}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={props.onRemove}>-</button>
                    <button onClick={props.onAdd}>+</button>
                </div>
            </div>
        </li>
    )
};

export default CartsItem;
