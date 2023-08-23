import { useQuery } from '@tanstack/react-query'
import { getMovieGenres } from '../services/TheMovieDB_API'

const GenresPage = () => {

    const getGenres = useQuery({
        queryFn: getMovieGenres,
        queryKey: ['genres']
    })

    console.log(getGenres.data?.genres)

    return (
        <div>
            
        </div>
    )
}

export default GenresPage
