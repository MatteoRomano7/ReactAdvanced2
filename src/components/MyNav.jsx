import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const CustomNavbar = (props) =>{
    
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary bg-warning">
            <Container fluid>
                <Navbar.Brand href="#home">
                    BookShelf!
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href="#menu">Home</Nav.Link>
                        <Nav.Link href="#prezzi">About</Nav.Link>
                        <Nav.Link href="#mappa">Browse</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default CustomNavbar;