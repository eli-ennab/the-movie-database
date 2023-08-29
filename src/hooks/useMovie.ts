import { useQuery } from '@tanstack/react-query'
import { getMovie } from '../services/TheMovieDB_API'

const useMovie = (movieId: number) => {
    return useQuery(
        ['movie', { id: movieId }],
        () => getMovie(movieId),
    )
}

export default useMovie