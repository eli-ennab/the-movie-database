import { useQuery } from '@tanstack/react-query'
import { getMovie } from '../services/TheMovieDB_API'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import IsErrorAlert from '../components/IsErrorAlert'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'

const MoviePage = () => {
    const { id } = useParams()
    const movieId = Number(id)
    const URL = "https://image.tmdb.org/t/p/w500"
    
    const {
        data,
        isError
    } = useQuery(
        ['movie', { movieId: movieId }],
        () => getMovie(movieId),
        )
        
    if (data === undefined) {
        return
    }
        
    const actors = data.credits.cast.filter(actors => actors.known_for_department === "Acting")

    if (isError) {
		return (
            <IsErrorAlert />
		)
	}

    return (
        <>
            <Card>
                <Card.Body>
                    <Image src={ URL + data.backdrop_path } className="mb-4 border-img" fluid />
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>Release date: {data.release_date}</Card.Text>
                        <Card.Text><span className="vote-average">{data.vote_average}</span></Card.Text>
                        <Card.Text>{data.overview}</Card.Text>
                        <Card.Text>Tagline: "{data.tagline}"</Card.Text>
                        <Card.Text>Original language: {data.original_language}</Card.Text>
                        <Card.Text>Original title: {data.original_title}</Card.Text>
                        <Card.Text>Runtime: {data.runtime} mins</Card.Text>
                        <Card.Text>Popularity: {data.popularity}</Card.Text>
                        <Card.Text>Budget: {data.budget}</Card.Text>
                        <hr></hr>
                        <h2 className="mb-4">Actors</h2>
                        { data.credits.cast && (
                            <ListGroup className="list-group-sm">
                                {actors?.map (actor => (
                                    <ListGroup.Item
                                        className="list-item sm"
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
                        
                        <h3 className="h2 mb-4">If you like {data.title}, you might like..</h3>
                            <Card.Link href="#">Movie 1</Card.Link>
                            <Card.Link href="#">Movie 2</Card.Link>
                    </Card.Body>
            </Card>
        </>
    )
}

export default MoviePage

