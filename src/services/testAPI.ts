/**
 * Test API towards The Movie DB
 * Docs: https://developer.themoviedb.org/docs
 * 
 * For example, the list of all genres: https://api.themoviedb.org/3/genre/movie/list?language=en
 */

import axios from 'axios'
import { MovieGenresResponse } from '../types/testType.types'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY: string | undefined = process.env.API_KEY

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
    return get<MovieGenresResponse>(`/movie/11?api_key=${API_KEY}`)
}