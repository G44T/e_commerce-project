import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Nav from 'react-bootstrap/Nav';



function CartWidget() {
    return (
        <Nav>
            <Button variant="gray">
                <FontAwesomeIcon icon={faCartShopping} style={{ width: 20, height: 20 }} />
                <Badge bg="primary">9</Badge>
            </Button>
        </Nav>
    )
}

export default CartWidget