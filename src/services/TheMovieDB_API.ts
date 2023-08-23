/**
 * Test API towards The Movie DB
 * Docs: https://developer.themoviedb.org/docs
 * 
 * For example, the list of all genres: 
 * https://api.themoviedb.org/3/genre/movie/list?language=en
 * Or one movie:
 * https://api.themoviedb.org/3/movie/550?api_key=${VITE_API_KEY}
 */

import axios from 'axios'
import { MovieGenresResponse } from '../types/MovieGenres.types'
import { MovieGenreResponse } from '../types/MovieGenre.types'

const BASE_URL = 'https://api.themoviedb.org/3'
const VITE_API_KEY = import.meta.env.VITE_API_KEY
// const VITE_BEARER_ACCESS_TOKEN = import.meta.env.VITE_BEARER_ACCESS_TOKEN

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": 'application/json',
        "Accept": "application/json",
        // "Authorization": "Bearer ACCESS_TOKEN",
    }
})

const get = async <T>(endpoint: string) => {
    const res = await instance.get<T>(endpoint)
    return res.data
}

export const getMovieGenres = () => {
    return get<MovieGenresResponse>(`/genre/movie/list?language=en&api_key=${VITE_API_KEY}`)
}

export const getMovieGenre = (genreId: number, page = 1) => {
    return get<MovieGenreResponse>(`/discover/movie?api_key=${VITE_API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&with_genres=${genreId}`)
}