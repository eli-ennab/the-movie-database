import { useParams } from 'react-router-dom'
import IsErrorAlert from '../components/IsErrorAlert'
import MovieCard from '../components/MovieCard'
import useMovie from '../hooks/useMovie'
import useRecommendations from '../hooks/useRecommendations'

const MoviePage = () => {    
    const { id } = useParams()
    const movieId = Number(id)
    const getRecommendations = useRecommendations(movieId)

    const {
        data,
        isError
    } = useMovie(movieId)

    if (isError) {
		return <IsErrorAlert />
	}

    return (
        <>
            { data && getRecommendations.data && 
                <MovieCard 
                    backdrop_path={data.backdrop_path} 
                    title={data.title} 
                    release_date={data.release_date} 
                    vote_average={data.vote_average} 
                    overview={data.overview} 
                    tagline={data.tagline} 
                    original_language={data.original_language} 
                    original_title={data.original_title} 
                    runtime={data.runtime} 
                    popularity={data.popularity} 
                    budget={data.budget} 
                    cast={data.credits.cast}
                    recommendations={getRecommendations.data.results}
                />
            }
        </>
    )
}

export default MoviePage

