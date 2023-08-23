import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'

const Navigation = () => {
	return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">The Movie DB</Navbar.Brand>
                <Nav className="ms-auto">
                    <Form>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                                </Col>
                                <Col xs="auto">
                                    <Button 
                                        type="submit"
                                        variant="light"
                                    >
                                        Search
                                    </Button>
                            </Col>
                        </Row>
                    </Form>
                </Nav>
            </Container>
        </Navbar>
	)
}

export default Navigation