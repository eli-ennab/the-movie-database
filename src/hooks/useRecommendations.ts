import { useQuery } from '@tanstack/react-query'
import { getRecommendedMovies } from '../services/TheMovieDB_API'

const useRecommendations = (movieId: number) => {
    return useQuery(
        ['recommendationsForMovie', { movieId: movieId }],
        () => getRecommendedMovies(movieId),
    )
}

export default useRecommendations