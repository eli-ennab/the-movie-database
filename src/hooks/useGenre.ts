import { useQuery } from '@tanstack/react-query'
import { getMovieGenre } from '../services/TheMovieDB_API'

const useGenre = (genreId: number, page: number) => {
    return useQuery(
        ['genre', { id: genreId }, { page: page }],
        () => getMovieGenre(genreId, page)
    )
}

export default useGenre