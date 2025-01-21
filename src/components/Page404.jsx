import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Page404() {

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="2" />
                <Col>
                    <br />
                    <h1>En Construccion</h1>
                    <br />
                    <Image src="https://i.postimg.cc/wv4ZtfXX/Page404.webp" fluid />
                </Col>
                <Col xs lg="2" />
            </Row>
        </Container>
    )
}

export default Page404