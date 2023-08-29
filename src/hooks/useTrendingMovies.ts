import { useQuery } from '@tanstack/react-query'
import { getTrendingMovies} from "../services/TheMovieDB_API"

const useTrendingMovies = (timeWindow: string) => {
    return useQuery(
        ['trendingMoviesToday', { timeWindow: timeWindow }],
        () => getTrendingMovies(timeWindow),
    )
}

export default useTrendingMovies