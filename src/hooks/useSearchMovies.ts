import { useQuery } from '@tanstack/react-query'
import { searchMovies } from '../services/TheMovieDB_API'

const useSearchMovies = (query: string, page: number) => {
    return useQuery(
        ['search-movie-db', { query: query }, { page: Number(page) }],
        () => searchMovies(query, Number(page))
    )
}

export default useSearchMovies