import { useState, useEffect } from 'react'
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

    /*
    // TRY 1
    const [movies, setMovies] = useState<MovieResponse[] | []>()

    localStorage.setItem('movies', JSON.stringify(movies)) 
    const result = localStorage.getItem('movies')
    result ? JSON.parse(result) : []
    const movieList = movies?.push(JSON.stringify(result))
    setMovies(movieList)
    console.log("result", result)
    */

    /*
    // TRY 2
    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(movies)) 
    }, [movies])

    const movies = localStorage.getItem('movies')
    const oldMovies: MovieResponse[] = []
    // const initialMoviesState = result ? JSON.parse(result) : []
    
    // const [movies, setMovies] = useState<MovieResponse[] | []>(initialMoviesState)
    
    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(movie))
        oldMovies.push(movies)
    }, [movie, movies, oldMovies])

    console.log(oldMovies)
    */

    /*
    // TRY 3
    const [storedMovies, setStoredMovies] = useState()

    const movieList: string[] = []
    localStorage.setItem(`${movieId}`, JSON.stringify(movie))
    const storedData = localStorage.getItem('movies')
    const result = storedData ? JSON.parse(storedData) : []
    movieList.push(result)
    console.log(movieList)

    useEffect(() => {
        setStoredMovies(movieList)
    }, [movieList])
    */

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