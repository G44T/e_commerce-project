import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Page404() {
    return (
        <Container>
            <Row>
                <Col xxl={12} xl={12}>
                    <h1>En Construccion</h1>
                    <Image src="../src/assets/Page404.png" fluid />
                </Col>
            </Row>
        </Container>
    )
}

export default Page404