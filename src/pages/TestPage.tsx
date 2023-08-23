import { useQuery } from '@tanstack/react-query'
import { getMovieGenres } from '../services/testAPI'

const MovieGenresPage = () => {

    const getGenres = useQuery({
        queryFn: getMovieGenres,
        queryKey: ['test']
    })

    console.log(getGenres.data?.data.genres)

    return (
        <div>
            
        </div>
    )
}

export default MovieGenresPage
