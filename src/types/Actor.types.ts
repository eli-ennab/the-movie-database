export type Actor = {
    adult: boolean
    also_known_as: AlsoKnownAsList[]
    biography: string
    birthday: string
    deathday: string
    gender: number
    homepage: string | null
    id: number
    imdb_id: string
    known_for_department: string
    name: string
    place_of_birth: string
    popularity: number
    profile_path: string
    movie_credits: {
        cast: ActorCast[]
    }

}

export type ActorCast = {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
    character: string
    credit_id: string
    order: number
}

export type AlsoKnownAsList = {
    also_known_as: string
}