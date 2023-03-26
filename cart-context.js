import React from 'react';

const CartContext =  React.createContext({
    items : [],
    totalAmmount : 0,
    addItemOnCart : (itmes)=>{},
    removeItemFromCart : (id)=>{}
});

export default CartContext;
