import { useContext, useState } from 'react';
import { CartContext } from '../contexts/cartContext';

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

function ItemCount({ item }) {

    const [count, setCount] = useState(0)
    const { addCart } = useContext(CartContext)

    const onClick = (e) => {

        switch (e.target.name) {
            case "add":
                setCount(count + 1)
                break;
            case "rest":
                setCount(count < 1 ? count : count - 1)
                break;
            default:
                break;
        }
    }

    const handleAddCart = () => {
        if (count > 0) {
            const newItem = {
                ...item,
                quantity: count
            }
            addCart(newItem)
        }
    }

    return (
        <Container>
            <br />
            <Row>
                <Col>
                    <Stack className="col-md-6 mx-auto">
                        <Button variant="primary" size="sm" name='add' onClick={onClick}>+</Button>
                    </Stack>
                </Col>
                <Col>
                    <Stack className="col-md-6 mx-auto">
                        <ListGroup.Item>{count}</ListGroup.Item>
                    </Stack>
                </Col>
                <Col>
                    <Stack className="col-md-6 mx-auto">
                        <Button variant="primary" size="sm" name='rest' onClick={onClick} disabled={count < 1}>-</Button>
                    </Stack>
                </Col>
            </Row>
            <br />
            <Row>
                <Stack className="col-md-12 mx-auto">
                    <Button variant="primary" size="sm" onClick={handleAddCart} disabled={count < 1}>Añadir al carrito</Button>
                </Stack>
            </Row>
        </Container>
    )
}

export default ItemCount