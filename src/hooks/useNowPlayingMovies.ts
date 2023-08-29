import { useQuery } from '@tanstack/react-query'
import { getNowPlayingMovies } from "../services/TheMovieDB_API"

const useNowPlayingMovies = () => {
    return useQuery(['nowPlayingMovies'], getNowPlayingMovies)
}

export default useNowPlayingMovies