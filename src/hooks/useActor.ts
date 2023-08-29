import { useQuery } from '@tanstack/react-query'
import { getActor } from '../services/TheMovieDB_API'

const useActor = (actorId: number) => {
    return useQuery(
        ['actor', { id: actorId }],
        () => getActor(actorId)
    )
}

export default useActor