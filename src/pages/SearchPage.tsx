import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const SearchPage = () => {
    return (
        <>
            <h1 className="h2 py-5">Search in The Movie Database</h1>
            <Form className="form-wrapper">
                <Form.Group controlId="searchQuery">
                <Form.Label>Search for movies</Form.Label>
                    <Form.Control type="text" className="search-form" placeholder="Enter your search" />
                </Form.Group>
                <Button className="submit-search-btn py-2 mx-2" variant="dark" type="submit">
                    Search
                </Button>
            </Form>
        </>
    )
}

export default SearchPage
