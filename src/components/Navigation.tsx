import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
	return (
        <Navbar data-bs-theme="dark" expand="md">
            <Container>
                <Navbar.Brand as={Link} to="/" className="h1">
                    The Movie DB
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} end to="/genres">
                            Browse movies by genre
                        </Nav.Link>
                        <Nav.Link as={NavLink} end to="/search">
                            Search movies
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
	)
}

export default Navigation