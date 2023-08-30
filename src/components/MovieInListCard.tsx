import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import na_image from './../../public/na_image.png'

interface IProps {
    poster_path: string | null
    title: string
    id: number
    vote_average: number
    release_date: string
}

const MovieInListCard: React.FC<IProps> = (
    { 
        poster_path, 
        title, 
        id, 
        vote_average, 
        release_date 
    }) => {

    const navigate = useNavigate()
    const URL = "https://image.tmdb.org/t/p/w500"

    const redirectToMovie = (id: number) => {
        navigate(`/movies/${id}`, { replace: true })
    }

    return (
        <Card>
            <Card.Img variant="top" src={poster_path ? URL + poster_path : na_image} />
                <Card.Body>
                    <Card.Title className="movie-card-title">{title} ({release_date.slice(0, 4)})</Card.Title>
                    <Card.Text><span className="vote-average">{vote_average}</span></Card.Text>
                    <hr></hr>
                    <div className="d-grid gap-2">
                        <Button
                            variant="dark"
                            onClick={() => redirectToMovie(id)}
                        >
                                Read more
                        </Button>
                    </div>
            </Card.Body>
        </Card>
    )
}

export default MovieInListCard
