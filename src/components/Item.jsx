import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router";

function Item({ item }) {

    const navigate = useNavigate();

    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`../src/assets/${item.img}`} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        {item.descrition}
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate(`/product/${item.id}`)} >Detalles</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item