import { useQuery } from '@tanstack/react-query'
import { getActor } from '../services/TheMovieDB_API'
import { useParams } from 'react-router-dom'

const ActorPage = () => {
    const { id } = useParams()
    const actorId = Number(id)

    const {
        data,
    } = useQuery(
        ['actor', { actorId: actorId }],
        () => getActor(actorId),
    )

    if (data === undefined) {
        return
    }

    return (
        <>
            <h1>{data.name}</h1> 
        </>
    )
}

export default ActorPage
