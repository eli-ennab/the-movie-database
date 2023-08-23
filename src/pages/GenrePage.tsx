import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getMovieGenre } from '../services/TheMovieDB_API'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
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
                        <Card>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                            <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            <Button
                                variant="light"
                            >
                                    Read more
                            </Button>
                            </Card.Body>
                        </Card>
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
