import { useQuery } from '@tanstack/react-query'
import { getMovieGenres } from '../services/TheMovieDB_API'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import IsErrorAlert from '../components/IsErrorAlert'

const GenresPage = () => {

    const getGenres = useQuery({
        queryKey: ['genres'],
        queryFn: getMovieGenres
    })

    if (getGenres.isError) {
		return (
            <IsErrorAlert />
		)
	}

    return (
        <>
            <h1 className="py-4">All Genres</h1>

            { getGenres.data && (
                <ListGroup>
                    {getGenres.data.genres.map (genre => (
                        <ListGroup.Item
                            key={genre.id}
                            action
                            as={Link}
                            to={`/genres/${genre.id}`}
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
