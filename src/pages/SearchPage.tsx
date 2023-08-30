import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import IsErrorAlert from '../components/IsErrorAlert'
import MovieInListCard from '../components/MovieInListCard'
import Pagination from '../components/Pagination'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import useSearchMovies from '../hooks/useSearchMovies'

const SearchPage = () => {
    const [searchInput, setSearchInput] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()

    const query = searchParams.get('query') ?? ''
    const page = searchParams.get('page') ?? 1

    const {
        data,
        isError,
    } = useSearchMovies(query, Number(page))

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!searchInput.trim().length) {
            return
        }

        setSearchParams({ query: searchInput, page: '1' })
    }

    if (isError) {
        return <IsErrorAlert />
    }

    return (
        <>
            <h1 className="h2 py-5"><span className="text-border">Search in The Movie Database</span></h1>
            <Form className="form-wrapper mb-4" onSubmit={handleSubmit}>
                <Form.Group controlId="searchQuery">
                <Form.Label>Search for movies</Form.Label>
                    <Form.Control 
                        className="search-form" 
                        type="text" 
                        placeholder="Enter your search"
                        onChange={e => setSearchInput(e.target.value)}
                        value={searchInput}
                    />
                </Form.Group>
                <Button 
                    className="submit-search-btn py-1.5 mx-2" 
                    variant="dark" 
                    type="submit"
                    disabled={!searchInput.trim().length}
                >
                    Search
                </Button>
            </Form>

            { query.length > 0 && data?.total_results === 0 && (
                <p>'{query}' does not exist in the database.</p>
            )}

            { data && data.results.length > 0 && (
                <>
                <h2 className="mb-4">{data.total_results} results for '{query}'</h2>

                <Row xs={1} md={3} lg={5} className="g-4">
                    {data.results.map (movie => (
						<Col key={movie.id}>
                            <MovieInListCard
                                poster_path={movie.poster_path} 
                                title={movie.title} 
                                id={movie.id} 
                                vote_average={movie.vote_average}
                                release_date={movie.release_date} 
                            />
                        </Col>
                    ))}
                </Row>

                <Pagination
                    page={data.page}
                    totalPages={data.total_pages}
                    hasPreviousPage={data.page > 1}
                    hasNextPage={data.page < data.total_pages}
                    onPreviousPage={ 
                        () => { setSearchParams({ query: query, page: (Number(page) - 1).toString() }) }
                    }
                    onNextPage={ 
                        () => { setSearchParams({ query: query, page: (Number(page) + 1).toString() }) }
                    }
                    />
                </>
            )} 
        </>
    )
}

export default SearchPage
