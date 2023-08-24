import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

interface IProps {
    poster_path: string | null
    title: string
}

const MovieCard: React.FC<IProps> = ({ poster_path, title }) => {
    const URL = "https://image.tmdb.org/t/p/w500"

    return (
        <Card>
            <Card.Img variant="top"  src={ URL + poster_path } />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div className="d-grid gap-2">
                    <Button
                        variant="dark"
                    >
                            Read more
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default MovieCard
