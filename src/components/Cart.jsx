import { useContext, useEffect, useState } from "react"
import { CartContext } from '../contexts/cartContext';
import CartItems from "./CartItems";
import Stack from 'react-bootstrap/Stack';
import Alert from 'react-bootstrap/Alert';

function Cart() {

    //const [cartItems, setCartItems] = useState([])
    const { cart, getTotals, acttionCart } = useContext(CartContext)

    useEffect(() => {        
    }, [cart])

    if (cart.length == 0) {
        return (
            <div className="flex-colum align-items-center mt-5">
                <Stack className="col-md-5 mx-auto">
                    <Alert variant="info">
                        No tienen Productos en el Carrito
                    </Alert>
                </Stack>
            </div>
        )
    }

    return (
        <div className="flex-colum align-items-center mt-5">
            <Stack className="col-md-5 mx-auto">
                <CartItems items={cart} clear={acttionCart} />
                <p className='mt-3'>Total: {getTotals("Purchase")}</p>
            </Stack>
        </div>
    )
}

export default Cart