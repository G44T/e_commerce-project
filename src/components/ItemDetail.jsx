import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from './ItemCount';

function ItemDetail({ itemDetail }) {

    return (
        <div className="d-flex justify-content-around">
            <Card style={{ width: '50rem' }}>
                <Card.Header>{itemDetail.fullName}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>{`Descripcion: ${itemDetail.fulldescrition}`}</ListGroup.Item>
                    <ListGroup.Item>{`Categoria: ${itemDetail.category}`}</ListGroup.Item>
                    <ListGroup.Item>{`S/: ${itemDetail.currencyNational}`}</ListGroup.Item>
                    <ListGroup.Item>{`$: ${itemDetail.currency}`}</ListGroup.Item>
                    <ItemCount item={itemDetail} />
                </ListGroup>
            </Card>

            <Card style={{ width: '50rem' }}>
                <Card.Img variant="top" src={`../src/assets/${itemDetail.img}`} />
            </Card>
        </div>
    )
}

export default ItemDetail