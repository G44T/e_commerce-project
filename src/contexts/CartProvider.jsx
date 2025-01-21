import { useState } from "react";

import { CartContext } from "./cartContext";
import Cart from "../components/Cart";

function CartProvider({ children }) {

    const [cart, setCart] = useState([])

    const addCart = (item) => {

        const itemExists = cart.map(x => x.id).indexOf(item.id)

        if (itemExists >= 0) {
            cart[itemExists].quantity = cart[itemExists].quantity + item.quantity
            setCart([...cart])
        }
        else {
            setCart([...cart, item])
        }
    }

    const getTotals = (operation) => {
        const quantities = cart.map(item => operation == "Products" ? item.quantity : item.quantity * item.currencyNational)
        const totalProducts = quantities.reduce((acc, current) => acc + current, 0)

        return totalProducts
    }

    const acttionCart = (operation, item) => {

        const index = cart.map(x => x.id).indexOf(operation == "clear" ? "0000" : item.id)

        switch (operation) {
            case "plus":                
                cart[index].quantity = cart[index].quantity + 1
                setCart([...cart])
                break;
            case "minus":
                cart[index].quantity = cart[index].quantity - 1
                setCart([...cart])
                break;
            case "trash":
                const newCart = cart.filter((e) => e.id != item.id);
                setCart(newCart)
                break;
            case "clear":
                setCart([])
                break;
            default:
                break;
        }

    }

    return (
        <CartContext.Provider value={{ cart, addCart, getTotals, acttionCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider