import { useQuery } from '@tanstack/react-query'
import { getMovieGenres} from "../services/TheMovieDB_API"

const useGenres = () => {
    return useQuery(['genres'], getMovieGenres)
}

export default useGenres