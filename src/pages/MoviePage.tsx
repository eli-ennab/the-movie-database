import { useQuery } from '@tanstack/react-query'
import { getMovie, getMovieCast } from '../services/TheMovieDB_API'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
// import { Link } from 'react-router-dom'

const MoviePage = () => {
    const { id } = useParams()
    const movieId = Number(id)
    const URL = "https://image.tmdb.org/t/p/w500"

    const {
        data,
    } = useQuery(
        ['movie', { movieId: movieId }],
        () => getMovie(movieId),
    )

    const getCast = useQuery(
        ['cast', { movieId: movieId } ],
        () => getMovieCast(movieId),
    )
    
    if (data === undefined) {
        return
    }
    console.log(data.overview)
    console.log(getCast.data?.cast)

    return (
        <>
            <Card>
                <Card.Img variant="top" src={ URL + data.backdrop_path } />
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>{data.overview}</Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Original language: {data.original_language}</ListGroup.Item>
                            <ListGroup.Item>Original title: {data.original_title}</ListGroup.Item>
                            <ListGroup.Item>Popularity: {data.popularity}</ListGroup.Item>
                        </ListGroup>
                        <hr></hr>
                        <h2>Cast</h2>
                        { getCast.data && (
                            <ListGroup>
                                {getCast.data.cast.map (cast => (
                                    <ListGroup.Item
                                        key={cast.id}
                                        // action
                                        // as={Link}
                                        // to={`/`}
                                    > 
                                        {cast.name} - {cast.known_for_department}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        )} 
                            {/* <Card.Link href="#">Actor 1</Card.Link>
                            <Card.Link href="#">Actor 2</Card.Link>
                        <hr></hr>
                        <h3>If you like this movie, you might like...</h3>
                            <Card.Link href="#">Movie 1</Card.Link>
                            <Card.Link href="#">Movie 2</Card.Link> */}
                    </Card.Body>
            </Card>
        </>
    )
}

export default MoviePage

