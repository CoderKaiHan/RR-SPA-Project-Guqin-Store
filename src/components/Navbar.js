import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/JPG826kb(1).png'

const Navigation = () => {
    return (
        <div>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">
                <img src={logo} alt='logo' style={{height:'75px', width:'75px'}}/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <NavDropdown title="Guqin" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Level 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Level 2
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Level 3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Browse all
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#link">Accessories</Nav.Link>
                  <NavDropdown title="Desks and Chairs" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Desks</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Chairs
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Combos</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Browse all
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#link">Books</Nav.Link>
                  <Nav.Link href="#link">Others</Nav.Link>
                  <Nav.Link href="#link">Guqin Musics</Nav.Link>
                 
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    );
}

export default Navigation;