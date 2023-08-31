import { useEffect, useState } from 'react'
import { useIsFetching } from '@tanstack/react-query'
import Hero from '../components/Hero'
import IsErrorAlert from '../components/IsErrorAlert'
import MovieInListCard from '../components/MovieInListCard'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import { MovieResponse } from '../types/Movie.types'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const HomePage = () => {
    const [timeWindow, setTimeWindow] = useState<string>('day')
    const isFetching = useIsFetching()

    const topRatedMovies = useTopRatedMovies()

    const nowPlayingMovies = useNowPlayingMovies()

	const trendingMovies = useTrendingMovies(timeWindow)

    useEffect(() => {
    }, [timeWindow])

    if (topRatedMovies.isError || nowPlayingMovies.isError || trendingMovies.isError) {
		return <IsErrorAlert />
	}

    const jsonMovies = localStorage.getItem('movies') ?? '[]'
    const latestMovies: MovieResponse[] = JSON.parse(jsonMovies)

	return !isFetching ? (
		<>
            <Hero />

            <h2 id="trending" className="mt-5 mb-4">
                <span className="text-border">
                    Trending
                </span>
			</h2>
            <ButtonGroup size="sm">
                <Button
                    variant="dark"
                    className={`mb-4 ${timeWindow === 'day' ? 'active-button' : ''}`}
                    onClick={() => setTimeWindow('day')}
                    >
                        This day
                </Button>
                <Button
                    variant="dark"
                    className={`mb-4 ${timeWindow === 'week' ? 'active-button' : ''}`}
                    onClick={() => setTimeWindow('week')}
                    >
                        This week
                </Button>
            </ButtonGroup>

			{ trendingMovies.data && trendingMovies.data.results && (
                <Row xs={1} md={3} lg={5} className="g-4">
                    {trendingMovies.data.results.slice(0, 10).map(movie => (
                        <Col key={movie.id}>
                            <MovieInListCard 
                                poster_path={movie.poster_path} 
                                title={movie.title} 
                                id={movie.id} 
                                vote_average={movie.vote_average}
                                release_date={movie.release_date} 
                            />
                        </Col>
                    ))}
                </Row>
            )}

            <h2 id="top-rated" className="my-5">
                <span className="text-border">
                    Top rated
                </span>
            </h2>
            { topRatedMovies.data && topRatedMovies.data.results && (
                <Row xs={1} md={3} lg={5} className="g-4">
                    {topRatedMovies.data.results.slice(0, 10).map(movie => (
                        <Col key={movie.id}>
                            <MovieInListCard 
                                poster_path={movie.poster_path} 
                                title={movie.title} 
                                id={movie.id} 
                                vote_average={movie.vote_average}
                                release_date={movie.release_date} 
                            />
                        </Col>
                    ))}
                </Row>
            )}

            <h2 id="now-playing" className="my-5">
                <span className="text-border">
                    Now playing
                </span>
			</h2>
			{ nowPlayingMovies.data && nowPlayingMovies.data.results && (
                <Row xs={1} md={3} lg={5} className="g-4">
                    {nowPlayingMovies.data.results.slice(0, 10).map(movie => (
                        <Col key={movie.id}>
                            <MovieInListCard 
                                poster_path={movie.poster_path} 
                                title={movie.title} 
                                id={movie.id} 
                                vote_average={movie.vote_average}
                                release_date={movie.release_date} 
                            />
                        </Col>
                    ))}
                </Row>
            )}

            <h2 id="now-playing" className="my-5">
                <span className="text-border">
                    Recent movies you watched
                </span>
			</h2>

            { latestMovies && (
                <Row xs={1} md={3} lg={5} className="g-4">
                    {latestMovies.slice(-10).map(movie => (
                        <Col key={movie.id}>
                            <MovieInListCard 
                                poster_path={movie.poster_path} 
                                title={movie.title} 
                                id={movie.id} 
                                vote_average={movie.vote_average}
                                release_date={movie.release_date} 
                            />
                        </Col>
                    ))}
                </Row>
            )}
		</>
	) : null
}

export default HomePage