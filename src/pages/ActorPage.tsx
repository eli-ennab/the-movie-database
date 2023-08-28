import { useQuery } from '@tanstack/react-query'
import { getActor } from '../services/TheMovieDB_API'
import { useParams } from 'react-router-dom'
import ActorCard from '../components/ActorCard'
import IsErrorAlert from '../components/IsErrorAlert'

const ActorPage = () => {
    const { id } = useParams()
    const actorId = Number(id)

    const {
        data,
        isError
    } = useQuery(
        ['actor', { actorId: actorId }],
        () => getActor(actorId),
    )

    if (data === undefined) {
        return
    }

	if (isError) {
		return (
            <IsErrorAlert />
		)
	}

    return (
        <>
            <ActorCard 
                profile_path={data.profile_path} 
                name={data.name} 
                popularity={data.popularity} 
                biography={data.biography} 
                place_of_birth={data.place_of_birth} 
                birthday={data.birthday} 
                deathday={data.deathday}
                cast={data.movie_credits.cast}                
            />
        </>
    )
}

export default ActorPage
