import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

interface IProps {
    poster_path: string | null
    title: string
    id: number
}

const MovieCard: React.FC<IProps> = ({ poster_path, title, id }) => {
    const navigate = useNavigate()
    const URL = "https://image.tmdb.org/t/p/w500"

    const redirectToMovie = (id: number) => {
        navigate(`/movies/${id}`, { replace: true })
      }

    return (
        <Card>
            <Card.Img variant="top" src={ URL + poster_path } />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
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

export default MovieCard
