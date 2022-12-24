import { useEffect, useState } from "react";
import CartContext from "./CartContext"

const CartState = (props)=>{

    const [cartItems, setCartItems] = useState([]);

    useEffect(()=>{
        const stored = JSON.parse(localStorage.getItem('cart'));
        if(stored)
            setCartItems(stored);
    }, [])

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cartItems));
    },[cartItems])

    return(
        <CartContext.Provider value={{cartItems, setCartItems}}>
            {
                props.children
            }
        </CartContext.Provider>
    )
}

export default CartState;