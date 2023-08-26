import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieGenre } from '../services/TheMovieDB_API'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import MovieCard from '../components/MovieCard'
// import Pagination from '../components/Pagination'

const GenrePage = () => {
    const { id } = useParams()
    const genreId = Number(id)

    const [page, setPage] = useState(1)

    const {
        data,
        isLoading,
        isError,
        isFetching,
        isPreviousData,
    } = useQuery({
        queryKey: ['genre', genreId, page],
        queryFn: () => getMovieGenre(genreId, page),
        keepPreviousData : true
      })
    
    if (data === undefined) {
        return
    }

    return (
        <>
            <h1 className="py-4">Which genre?</h1>

            <p>Showing {data.results.length} results out of {data.total_results}</p>

            { isLoading && (
                <p>Loading</p>
            )}

            { isError && (
                <p>Error</p>
            )} 

            { data.results && (
                <Row xs={1} md={3} lg={5} className="g-4">
                    {data.results.map(movie => (
                        <Col key={movie.id}>
                            <MovieCard poster_path={movie.poster_path} title={movie.title} id={movie.id} />
                        </Col>
                    ))}
                </Row>
            )}

            <span>Current Page: {page}</span>

            <button
            onClick={() => setPage(old => Math.max(old - 1, 0))}
            disabled={page === 1}
            >
            Previous Page
            </button>{' '}

            <button
            onClick={() => {
                if (!isPreviousData && page + 1 > 0 ) {
                setPage(old => old + 1)
                }
            }}
            disabled={isPreviousData || page + 1 >= data.total_pages}
            >
            Next Page
            </button>

            {isFetching ? <span> Loading...</span> : null}{' '}

            {/* <Pagination
                page={1}
                totalPages={data.total_pages}
                hasPreviousPage={data.page > 1}
                hasNextPage={data.page < 1} 
                onPreviousPage={} 
                onNextPage={}
            /> */}
        </>
    )
}

export default GenrePage
