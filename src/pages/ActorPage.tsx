import { useParams } from 'react-router-dom'
import ActorCard from '../components/ActorCard'
import IsErrorAlert from '../components/IsErrorAlert'
import useActor from '../hooks/useActor'

const ActorPage = () => {
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

    return (
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
    )
}

export default ActorPage
