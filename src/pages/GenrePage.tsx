import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getMovieGenre } from '../services/TheMovieDB_API'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import MovieCard from '../components/MovieCard'
// import Pagination from '../components/Pagination'

const GenrePage = () => {
    const { id } = useParams()
    const genreId = Number(id)
    console.log("genre id", genreId)

    const {
        data,
    } = useQuery(
        ['genre', { genreId: genreId }, { currentPage: 1 }],
        () => getMovieGenre(genreId, 1),
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
