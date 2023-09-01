/**
 * API, The Movie DB
 * Docs: https://developer.themoviedb.org/docs
 */

import axios from 'axios'
import { MovieGenresResponse, MovieListResponse, MovieResponse, Actor } from '../types/index.types'

const VITE_API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
const FAKE_DELAY = 2000
const include_adult = 'include_adult=false'
const language = 'language=en-US'

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": 'application/json',
        "Accept": "application/json",
    }
})

const get = async <T>(endpoint: string) => {
    const res = await instance.get<T>(endpoint)
    !!FAKE_DELAY && await new Promise((r) => setTimeout(r, FAKE_DELAY))
    return res.data
}

export const searchMovies = (query: string, page = 1) => {
    return get<MovieListResponse>(`/search/movie?api_key=${VITE_API_KEY}&query=${query}&${include_adult}&${language}&page=${page}`)
}

export const getMovieGenres = () => {
    return get<MovieGenresResponse>(`/genre/movie/list?language=en&api_key=${VITE_API_KEY}`)
}

export const getMovieGenre = (genreId: number, page = 1) => {
    return get<MovieListResponse>(`/discover/movie?api_key=${VITE_API_KEY}&${include_adult}&${language}&page=${page}&sort_by=popularity.desc&with_genres=${genreId}`)
}

export const getTopRatedMovies = () => {
    return get<MovieListResponse>(`/movie/top_rated?api_key=${VITE_API_KEY}&${include_adult}&${language}`)
}

export const getTrendingMovies = (time_window: string) => {
    return get<MovieListResponse>(`/trending/movie/${time_window}?api_key=${VITE_API_KEY}&${include_adult}&${language}`)
}

export const getNowPlayingMovies = () => {
    return get<MovieListResponse>(`/movie/now_playing?api_key=${VITE_API_KEY}&${include_adult}&${language}`)
}

export const getRecommendedMovies = (movieId: number, page = 1) => {
    return get<MovieListResponse>(`/movie/${movieId}/recommendations?api_key=${VITE_API_KEY}&${include_adult}&${language}&page=${page}`)
}

export const getMovie = (movieId: number) => {
    return get<MovieResponse>(`/movie/${movieId}?api_key=${VITE_API_KEY}&append_to_response=credits`)
}

export const getActor = (actorId: number) => {
    return get<Actor>(`/person/${actorId}?api_key=${VITE_API_KEY}&${language}&append_to_response=movie_credits`)
}
