

import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap';


function NavComponent(){
    return(
      <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/people">People</Nav.Link>
        <Nav.Link as={Link} to="/films">Films</Nav.Link>
        <Nav.Link as={Link} to="/planets">Planets</Nav.Link>
        <Nav.Link as={Link} to="/starships">Starships</Nav.Link>
        <Nav.Link as={Link} to="/vehicles">Vehicles</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    )
}

export default NavComponent