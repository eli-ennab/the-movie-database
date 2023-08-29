import { useQuery } from '@tanstack/react-query'
import { getMostPopularMovies} from "../services/TheMovieDB_API"

const useMostPopularMovies = () => {
    return useQuery(['mostPopularMovies'], getMostPopularMovies)
}

export default useMostPopularMovies