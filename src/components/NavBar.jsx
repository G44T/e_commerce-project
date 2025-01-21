import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

import CartWidget from './CartWidget.jsx'
import { useState } from 'react';
import { Link } from 'react-router'



function NavBar({ brandName }) {

    const [categories, setCategories] = useState([
        { id: 1, nameCategory: 'LAPTOP' },
        { id: 2, nameCategory: 'MOUSE' },
        { id: 3, nameCategory: 'MONITOR' },
        { id: 4, nameCategory: 'TECLADO' },
        { id: 5, nameCategory: 'IMPRESORA' },
    ])

    return (
        <Navbar collapseOnSelect expand="xl" className="bg-body-tertiary">
            <Container>

                <Navbar.Brand as={Link} to="/">
                    <Image
                        src="../src/assets/logo.png"
                        width="30"
                        height="30"
                        roundedCircle
                        className="d-inline-block align-top" />
                    {"   "}
                    {brandName}
                </Navbar.Brand>

                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto" variant="underline">
                        {
                            categories.map((category) => {
                                return (
                                    <Nav.Link as={Link} to={`/category/${category.nameCategory}`} key={category.id}>{category.nameCategory}</Nav.Link>
                                )
                            })
                        }
                    </Nav>

                    <CartWidget />

                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavBar