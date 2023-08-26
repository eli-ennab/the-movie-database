import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getMovieGenre } from '../services/TheMovieDB_API'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'
import { useState } from 'react'

const GenrePage = () => {
    const [page, setPage] = useState(1)

    const { id } = useParams()
    const genreId = Number(id)

    const {
        data,
    } = useQuery(
        ['genre', { genreId: genreId }, { currentPage: page }],
        () => getMovieGenre(genreId, page),
    )
    
    if (data === undefined) {
        return
    }

    return (
        <>
            <h1 className="py-4">Which genre?</h1>

            <p>Showing {data.results.length} results out of {data.total_results}</p>

            { data.results && (
                <Row xs={1} md={3} lg={5} className="g-4">
                    {data.results.map(movie => (
                        <Col key={movie.id}>
                            <MovieCard poster_path={movie.poster_path} title={movie.title} id={movie.id} />
                        </Col>
                    ))}
                </Row>
            )}

            <Pagination
                page={data.page}
                totalPages={data.total_pages}
                hasPreviousPage={data.page > 1}
                hasNextPage={data.page < data.total_pages}
                onPreviousPage={() => { setPage(prevValue => prevValue - 1) }}
                onNextPage={() => { setPage(prevValue => prevValue + 1) }}
			/>
        </>
    )
}

export default GenrePage
