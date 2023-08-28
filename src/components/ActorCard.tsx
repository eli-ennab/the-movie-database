import { Link } from 'react-router-dom'
import { ActorCast } from '../types/Actor.types'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'

interface IProps {
    profile_path: string
    name: string
    popularity: number
    biography: string
    place_of_birth: string
    birthday: string
    deathday: string | null
    cast: Array<ActorCast>
}

const ActorCard: React.FC<IProps> = (
    { 
        profile_path,
        name,
        popularity,
        biography,
        place_of_birth,
        birthday,
        deathday,
        cast,
    }) => {

    const URL = "https://image.tmdb.org/t/p/w500"

    return (
        <Card>
            <Card.Body>
                <Image src={ URL + profile_path } className="w-25 border-img mb-4" fluid />
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Popularity: {popularity}</Card.Text>
                    <Card.Text>{biography}</Card.Text>
                    <Card.Text>Birthplace: {place_of_birth}</Card.Text>
                    <Card.Text>Birthday: {birthday}</Card.Text>
                    <Card.Text>Deathday: {deathday}</Card.Text>
                    <hr></hr>
                    <h2 className="mb-4">Movies</h2>
                    { cast && (
                        <ListGroup className="list-group-sm">
                            {cast.map (movie => (
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
    )
}

export default ActorCard