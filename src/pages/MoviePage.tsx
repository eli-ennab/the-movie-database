import { useQuery } from '@tanstack/react-query'
import { getMovie } from '../services/TheMovieDB_API'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

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
    
    if (data === undefined) {
        return
    }

    const actors = data.credits.cast.filter(actors => actors.known_for_department === "Acting")

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
                        <h2>Actors</h2>
                        { data.credits.cast && (
                            <ListGroup>
                                {actors?.map (actor => (
                                    <ListGroup.Item
                                        key={actor.id}
                                        action
                                        as={Link}
                                        to={`/movies/${movieId}/actors/${actor.id}`}
                                    > 
                                        {actor.name}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        )} 

                        <hr></hr>
                        
                        <h3>If you like this movie, you might like...</h3>
                            <Card.Link href="#">Movie 1</Card.Link>
                            <Card.Link href="#">Movie 2</Card.Link>
                    </Card.Body>
            </Card>
        </>
    )
}

export default MoviePage

