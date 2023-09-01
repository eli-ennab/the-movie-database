import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

interface IProps {
    value: string
    onChange: (e: any) => void
    onSubmit: (e: React.FormEvent) => void
}

const SearchForm: React.FC<IProps> = ( { value, onChange, onSubmit } ) => {
    return (
        <Form className="form-wrapper mb-4" onSubmit={onSubmit}>
        <Form.Group controlId="searchQuery">
        <Form.Label>Search for movies</Form.Label>
            <Form.Control 
                className="search-form" 
                type="text" 
                placeholder="Enter your search"
                onChange={onChange}
                value={value}
            />
        </Form.Group>

        <Button 
            className="submit-search-btn py-1.5 mx-2" 
            variant="dark" 
            type="submit"
            disabled={!value.trim().length}
        >
            Search
        </Button>
    </Form>
    )
}

export default SearchForm
