import { useEffect, useState } from "react";
import CartContext from "./CartContext"

const CartState = (props)=>{

    const [cartItems, setCartItems] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
  
    return(
        <CartContext.Provider value={{cartItems, setCartItems, subTotal, setSubTotal}}>
            {
                props.children
            }
        </CartContext.Provider>
    )
}

export default CartState;