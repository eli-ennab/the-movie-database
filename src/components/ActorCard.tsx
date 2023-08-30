import { Link } from 'react-router-dom'
import { ActorCast } from '../types/Actor.types'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import na_image from '../images/na_image.png'

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
                <Image src={profile_path ? URL + profile_path : na_image} className="w-25 border-img mb-4" fluid />
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Popularity: {popularity || 'N/A'}</Card.Text>
                    <Card.Text>Biography: {biography || 'N/A'}</Card.Text>
                    <Card.Text>Birthplace: {place_of_birth || 'N/A'}</Card.Text>
                    <Card.Text>Birthday: {birthday || 'N/A'}</Card.Text>
                    <Card.Text>Deathday: {deathday || 'N/A'}</Card.Text>
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