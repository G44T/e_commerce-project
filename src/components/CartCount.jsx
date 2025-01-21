import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

import { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';

function CartCount({item}) {

    const { acttionCart } = useContext(CartContext)

    return (
        <Container>
            <Row>
                <Col>
                    <Button variant="secondary" size="sm" onClick={() => acttionCart("plus", item)}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Button >
                </Col>
                <Col>
                    <Button variant="secondary" size="sm" disabled={item.quantity < 2}>
                        <FontAwesomeIcon icon={faMinus} onClick={() => acttionCart("minus", item)}/>
                    </Button >
                </Col>
                <Col>
                    <Button variant="secondary" size="sm" onClick={() => acttionCart("trash", item)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </Button >
                </Col>
            </Row>
        </Container>
    )
}

export default CartCount