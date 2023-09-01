import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useIsFetching } from '@tanstack/react-query'
import IsErrorAlert from '../components/IsErrorAlert'
import MovieInListCard from '../components/MovieInListCard'
import Pagination from '../components/Pagination'
import SearchForm from '../components/SearchForm'
import useSearchMovies from '../hooks/useSearchMovies'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const SearchPage = () => {
    const [searchInput, setSearchInput] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()

    const isFetching = useIsFetching()

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

	return !isFetching ? (
        <>
            <h1 className="h2 py-5">
                <span className="text-border">
                    Search in The Movie Database
                </span>
            </h1>

            <SearchForm
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                onSubmit={handleSubmit}
			/>

            {query.length > 0 && data?.total_results === 0 && (
                <p>
                    '{query}' does not exist in the database.
                </p>
            )}

            {data && data.results.length > 0 && (
                <>
                    <h2 className="mb-4">
                        {data.total_results} results for '{query}'
                    </h2>

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
    ) : null
}

export default SearchPage
