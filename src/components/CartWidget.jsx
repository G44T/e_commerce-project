import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../contexts/cartContext';

import Nav from 'react-bootstrap/Nav';

function CartWidget() {

    const { cart, getTotals } = useContext(CartContext)

    return (
        <Nav>
            <Button variant="gray">
                <Nav.Link as={Link} to={`/cart`}>
                    <FontAwesomeIcon icon={faCartShopping} style={{ width: 20, height: 20 }} />
                    <Badge bg="primary">{getTotals("Products")}</Badge>
                </Nav.Link>
            </Button>
        </Nav>
    )
}

export default CartWidget

