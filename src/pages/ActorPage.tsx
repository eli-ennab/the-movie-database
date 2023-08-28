import { useQuery } from '@tanstack/react-query'
import { getActor } from '../services/TheMovieDB_API'
import { Link, useParams } from 'react-router-dom'
import IsErrorAlert from '../components/IsErrorAlert'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'

const ActorPage = () => {
    const { id } = useParams()
    const actorId = Number(id)
    const URL = "https://image.tmdb.org/t/p/w500"

    const {
        data,
        isError
    } = useQuery(
        ['actor', { actorId: actorId }],
        () => getActor(actorId),
    )

    if (data === undefined) {
        return
    }

	if (isError) {
		return (
            <IsErrorAlert />
		)
	}

    return (
        <>
            <Card>
                <Card.Body>
                    <Image src={ URL + data.profile_path } className="w-25 border-img" fluid />
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>Popularity: {data.popularity}</Card.Text>
                        <Card.Text>{data.biography}</Card.Text>
                        <Card.Text>Birthplace: {data.place_of_birth}</Card.Text>
                        <Card.Text>Birthday: {data.birthday}</Card.Text>
                        <Card.Text>Deathday: {data.deathday}</Card.Text>
                        <hr></hr>
                        <h2 className="mb-4">Movies</h2>
                        { data.movie_credits.cast && (
                            <ListGroup className="list-group-sm">
                                {data.movie_credits.cast.map (movie => (
                                    <ListGroup.Item
                                        className="list-item sm"
                                        key={movie.id}
                                        action
                                        as={Link}
                                        to={`/movies/${movie.id}`}
                                    > 
                                        {movie.title}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        )} 
                    </Card.Body>
            </Card>
        </>
    )
}

export default ActorPage
