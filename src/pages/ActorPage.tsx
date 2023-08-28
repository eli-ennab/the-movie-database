import { useQuery } from '@tanstack/react-query'
import { getActor } from '../services/TheMovieDB_API'
import { useParams } from 'react-router-dom'
import IsErrorAlert from '../components/IsErrorAlert'
import Card from 'react-bootstrap/Card'
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
                <Card.Img variant="top" src={ URL + data.profile_path } className="w-25 fluid" />
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>{data.biography}</Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Birthday: {data.birthday}</ListGroup.Item>
                            <ListGroup.Item>Place of birth: {data.place_of_birth}</ListGroup.Item>
                        </ListGroup>
                        <hr></hr>
                        <h2>Casting in:</h2>
                        { data.movie_credits.cast && (
                            <ListGroup>
                                {data.movie_credits.cast.map (movie => (
                                    <ListGroup.Item
                                        key={movie.id}
                                    > 
                                        {movie.title}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        )} 
            </Card>
        </>
    )
}

export default ActorPage
