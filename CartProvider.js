import CartContext from './cart-context';

const CartProvider = (props) =>{

    const  addItemToCartHandler = ()=>{};
    const removeItemFomCartHandler = ()=>{};

    const cartContext = {
        items : [],
        totalAmmount : 0,
        addItemOnCart : addItemToCartHandler,
        removeItemFromCart : removeItemFomCartHandler
    }

    return <CartContext.Provider value = {cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;