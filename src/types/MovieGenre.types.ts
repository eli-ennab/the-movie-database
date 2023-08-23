export type MovieGenreResponse = {
    page: number
    results: GenreResult[]
    total_pages: number
    total_results: number
}

export type GenreResult = {
    adult: false,
    backdrop_path: string | null
    genre_ids: [
        number,
        number
    ],
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string | null
    release_date: Date
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}