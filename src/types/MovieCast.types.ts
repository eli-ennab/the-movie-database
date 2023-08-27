export type MovieCastResponse = {
    id: number,
    cast: Cast[]
}

export type Cast = {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string
    cast_id: number
    character: string
    credit_id: string
    order: number
}

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