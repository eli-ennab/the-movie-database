import { useQuery } from '@tanstack/react-query'
import { getMovieGenres } from '../services/testAPI'

const MovieGenresPage = () => {

    const { data } = useQuery({
        queryFn: getMovieGenres,
        queryKey: ['test']
    })

    console.log(data?.genres)

    return (
        <div>
            
        </div>
    )
}

export default MovieGenresPage
