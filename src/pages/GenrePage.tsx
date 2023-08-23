import { useQuery } from '@tanstack/react-query'
import { getMovieGenre } from '../services/TheMovieDB_API'
import ListGroup from 'react-bootstrap/ListGroup'

const GenrePage = () => {

    const { data } = useQuery({
        queryFn: getMovieGenre,
        queryKey: ['genre']
    })

    console.log(data?.results)

    return (
        <>
            <h1>Which genre?</h1>

            { data?.results && (
                <ListGroup>
                    {data.results.map (genre => (
                        <ListGroup.Item
                            key={genre.id}
                        > 
                            name '{genre.original_title}'', id '{genre.id}'
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )} 
        </>
    )
}

export default GenrePage
