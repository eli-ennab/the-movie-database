import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import IsErrorAlert from '../components/IsErrorAlert'
import useGenres from '../hooks/useGenres'

const GenresPage = () => {

    const getGenres = useGenres()

    if (getGenres.isError) {
		return (
            <IsErrorAlert />
		)
	}

    return (
        <>
            <h1 className="h2 py-5"><span className="text-border">Browse movies by genre</span></h1>

            { getGenres.data && (
                <ListGroup>
                    {getGenres.data.genres.map (genre => (
                        <ListGroup.Item
                            className="list-item"
                            key={genre.id}
                            action
                            as={Link}
                            to={`/genres/${genre.id}/${genre.name}`}
                        > 
                            {genre.name}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )} 
        </>
    )
}

export default GenresPage
