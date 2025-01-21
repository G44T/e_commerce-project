import { useContext, useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { createOrder } from '../firebase/db';
import { CartContext } from '../contexts/cartContext';
import { serverTimestamp } from 'firebase/firestore';
import CheckoutAlert from './CheckoutAlert';

function CheckOutForm() {

    const [orderId, setOrderId] = useState(null)
    const [modalShow, setModalShow] = useState(false);

    const { getTotals, cart, acttionCart } = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const [email, name, phone] = form

        const order = {
            buyer: { name: email.value, email: name.value, phone: phone.value },
            total: getTotals(),
            imtes: cart,
            time: serverTimestamp()
        }

        createOrder(order)
            .then(res => setOrderId(res))

        setModalShow(true)
        acttionCart("clear")
    }

    return (
        <>
            <Form className='mt-5' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" placeholder="example@example.com" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Example" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text" placeholder="956 165 248" required />
                </Form.Group>
                <Button variant="dark" type="submit" className='w-100'>Ingresar Orden</Button>
            </Form>

            <CheckoutAlert show={modalShow} id={orderId} onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default CheckOutForm