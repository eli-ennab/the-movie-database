import { useQuery } from '@tanstack/react-query'
import { getTopRatedMovies } from "../services/TheMovieDB_API"

const useTopRatedMovies = () => {
    return useQuery(['topRatedMovies'], getTopRatedMovies)
}

export default useTopRatedMovies