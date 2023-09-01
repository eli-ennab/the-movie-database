import { Link, NavLink } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import damoviedb_logo from '../images/damoviedb_logo.png'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
	return (
        <Navbar data-bs-theme="dark" expand="md">
            <Container>
                <Navbar.Brand as={Link} to="/" className="h1">
                    <Image src={damoviedb_logo} className="mx-2" height={35} alt="The Movie Database" />
                        The Movie Database
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="https://github.com/eli-ennab" title="da creator's github account" target="_blank" className="px-2">
                            <FaGithub />
                        </Nav.Link>
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