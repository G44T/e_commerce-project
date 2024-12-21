import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function ItemDetail({ itemDetail }) {

    const [count, setCount] = useState(0)

    console.log(itemDetail.currencyNational)

    return (
        <div className="d-flex justify-content-around">
            <Card style={{ width: '50rem' }}>
                <Card.Header>{itemDetail.fullName}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>{`Descripcion: ${itemDetail.fulldescrition}`}</ListGroup.Item>
                    <ListGroup.Item>{`Categoria: ${itemDetail.category}`}</ListGroup.Item>
                    <ListGroup.Item>{`S/: ${itemDetail.currencyNational}`}</ListGroup.Item>
                    <ListGroup.Item>{`$: ${itemDetail.currency}`}</ListGroup.Item>
                    <br />
                    <Button variant="primary" size="lg" onClick={() => setCount(count + 1)}>+</Button>
                    <br />
                    <ListGroup.Item>{count}</ListGroup.Item>
                    <br />
                    <Button variant="primary" size="lg" onClick={() => setCount(count - 1)}>-</Button>

                </ListGroup>
            </Card>

            <Card style={{ width: '50rem' }}>
                <Card.Img variant="top" src={`../src/assets/${itemDetail.img}`} />
            </Card>
        </div>
    )
}

export default ItemDetail