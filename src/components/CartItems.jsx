import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import CartItem from './CartItem';

import { useNavigate } from "react-router";

function CartItems({ items, clear }) {

    const navigate = useNavigate();

    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                {items.map((item, index) => (
                    <CartItem key={index} item={item} />
                ))}
            </Table>
            <Button variant='success' onClick={() => navigate(`/checkout`)}>Finalizar Compra</Button>
            <Button variant='danger' className='mt-3' onClick={() => clear("clear")}>Limpiar Carrito de Compra</Button>
        </ >
    )
}

export default CartItems