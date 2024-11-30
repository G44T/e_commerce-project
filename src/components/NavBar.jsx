import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';


function NavBar({ brandName, productos }) {

    return (
        <Navbar collapseOnSelect expand="xl" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <Image 
                        src="src/assets/logo.png" 
                        width="30"
                        height="30" 
                        roundedCircle
                        className="d-inline-block align-top" />
                    {"   "}
                    {brandName}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {
                            productos.map((producto, index) => {
                                return (
                                    <Nav.Link key={index}>{producto.nombre}</Nav.Link>
                                )
                            })
                        }
                    </Nav>
                    <Nav>                        
                        <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar