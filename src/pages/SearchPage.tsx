import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { searchMovies } from '../services/TheMovieDB_API'
import IsErrorAlert from '../components/IsErrorAlert'
import MovieInListCard from '../components/MovieInListCard'
import Pagination from '../components/Pagination'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

const SearchPage = () => {
    const [searchInput, setSearchInput] = useState('')
    const [page, setPage] = useState(1)
    const [searchParams, setSearchParams] = useSearchParams()

    const query = searchParams.get('query') ?? ''

    const {
        data,
        isError
    } = useQuery(
        ['search-movie-db', { query: query }, { currentPage: page }],
        () => searchMovies(query, page)
    )

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!searchInput.trim().length) {
            return
        }

        setPage(1)

        setSearchParams({ query: searchInput })
    }

    if (data === undefined) {
        return
    }

    if (isError) {
        <IsErrorAlert />
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

            { data.results.length > 0 && (
                <>
                <h2 className="mb-4">Showing {data.results.length} out of {data.total_results} results</h2>

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
                        () => { setPage(prevValue => prevValue - 1) }
                    }
                    onNextPage={ 
                        () => { setPage(prevValue => prevValue + 1) }
                    }
                    />
                </>
            )} 
        </>
    )
}

export default SearchPage
