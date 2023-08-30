import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import { useParams } from 'react-router-dom'
import { Cast } from '../types/Movie.types'
import { Link } from 'react-router-dom'
import { MovieResult } from '../types/MovieList.types'

interface IProps {
    backdrop_path: string
    title: string
    release_date: string
    vote_average: number
    overview: string
    tagline: string
    original_language: string
    original_title: string
    runtime: number
    popularity: number
    budget: number
    cast: Array<Cast>
    recommendations: Array<MovieResult>
}

const MovieCard: React.FC<IProps> = (
    {
        backdrop_path,
        title,
        release_date,
        vote_average,
        overview,
        tagline,
        original_language,
        original_title,
        runtime,
        popularity,
        budget,
        cast,
        recommendations
    }) => {

    const URL = "https://image.tmdb.org/t/p/w500"

    const { id } = useParams()
    const movieId = Number(id)

    const actors = cast.filter(actors => actors.known_for_department === "Acting")

    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    return (
        <Card className="movie-card">
        <Card.Body>
            <Image src={ URL + backdrop_path } className="mb-4 border-img" fluid />
                <Card.Title>{title}</Card.Title>
                <Card.Text>Release date: {release_date}</Card.Text>
                <Card.Text><span className="vote-average">{vote_average}</span></Card.Text>
                <Card.Text>{overview}</Card.Text>
                <Card.Text>Tagline: "{tagline}"</Card.Text>
                <Card.Text>Original language: {original_language}</Card.Text>
                <Card.Text>Original title: {original_title}</Card.Text>
                <Card.Text>Runtime: {runtime} mins</Card.Text>
                <Card.Text>Popularity: {popularity}</Card.Text>
                <Card.Text>Budget: {USDollar.format(budget)}</Card.Text>
                <hr></hr>
                <h2 className="mb-4">Actors</h2>
                { actors && (
                    <ListGroup className="list-group-sm">
                        {actors.map (actor => (
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
                
                <h3 className="h2 mb-4">If you like <span className="movie-title">{title}</span>, you might also like..</h3>
                { recommendations && (
                    <ListGroup className="list-group-sm">
                        {recommendations.map (movie => (
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

export default MovieCard