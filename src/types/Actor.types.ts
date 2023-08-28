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
}

export type AlsoKnownAsList = {
    also_known_as: string
}