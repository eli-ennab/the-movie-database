import { useParams } from 'react-router-dom'
import { useIsFetching } from '@tanstack/react-query'
import ActorCard from '../components/ActorCard'
import IsErrorAlert from '../components/IsErrorAlert'
import useActor from '../hooks/useActor'

const ActorPage = () => {
    const isFetching = useIsFetching()

    const { id } = useParams()
    const actorId = Number(id)

    const {
        data,
        isError
    } = useActor(actorId)

	if (isError) {
		return (
            <IsErrorAlert />
		)
	}

	return !isFetching ? (
        <>
            { data &&
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
            }
        </>
    ) : null
}

export default ActorPage
