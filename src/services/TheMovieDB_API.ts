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
import { MovieListResponse } from '../types/MovieGenre.types'
import { MovieResponse } from '../types/MovieResponse'

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
    return get<MovieListResponse>(`/discover/movie?api_key=${VITE_API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&with_genres=${genreId}`)
}

export const getTopRatedMovies = () => {
    return get<MovieListResponse>(`/movie/top_rated?api_key=${VITE_API_KEY}&language=en-US`)
}

export const getMostPopularMovies = () => {
    return get<MovieListResponse>(`/movie/popular?api_key=${VITE_API_KEY}&language=en-US`)
}

export const getNowPlayingMovies = () => {
    return get<MovieListResponse>(`/movie/now_playing?api_key=${VITE_API_KEY}&language=en-US`)
}

export const getMovie = (movieId: number) => {
    return get<MovieResponse>(`/movie/${movieId}?api_key=${VITE_API_KEY}`)
}

