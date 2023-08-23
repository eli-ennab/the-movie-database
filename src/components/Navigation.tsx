import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
	return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    The Movie DB
                </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} end to="/genres">
                            Browse movies by genre
                        </Nav.Link>
                        <Nav.Link as={NavLink} end to="/search">
                            Search movies
                        </Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
	)
}

export default Navigation