import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import { useParams } from 'react-router-dom'
import { Cast, MovieResponse } from '../types/Movie.types'
import { Link } from 'react-router-dom'
import { MovieResult } from '../types/MovieList.types'
import na_image from '../images/na_image.png'
import na_image_sm from '../images/na_image_sm.png'

interface IProps {
    movie: MovieResponse
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
        movie,
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

    const jsonMovies = localStorage.getItem('movies') ?? '[]'
    const movies: MovieResponse[] = JSON.parse(jsonMovies)
    movies.push(movie)
    localStorage.setItem('movies', JSON.stringify(movies))

    return (
        <Card className="movie-card">
        <Card.Body>
            <Image src={backdrop_path ? URL + backdrop_path : na_image} className="mb-4 border-img" fluid />
                <Card.Title>{title || 'N/A'}</Card.Title>
                <Card.Text>Release date: {release_date || 'N/A'}</Card.Text>
                <Card.Text><span className="vote-average">{vote_average || 'N/A'}</span></Card.Text>
                <Card.Text>{overview}</Card.Text>
                <Card.Text>Tagline: {tagline || 'N/A'}</Card.Text>
                <Card.Text>Original language: {original_language || 'N/A'}</Card.Text>
                <Card.Text>Original title: {original_title || 'N/A'}</Card.Text>
                <Card.Text>Runtime: {runtime || 'N/A'} mins</Card.Text>
                <Card.Text>Popularity: {popularity || 'N/A'}</Card.Text>
                <Card.Text>Budget: {USDollar.format(budget) || 'N/A'}</Card.Text>
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
                
                <h3 className="h2 mb-4">If you like <span className="movie-title">{title}</span>, you might also like...</h3>
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
                                {movie.title || 'N/A'}
                                <Image src={movie.backdrop_path ? URL + movie.backdrop_path : na_image_sm} className="mb-4 border-img" fluid />
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )} 
            </Card.Body>
    </Card>
    )
}

export default MovieCard