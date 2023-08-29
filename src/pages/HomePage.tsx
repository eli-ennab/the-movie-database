import { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import IsErrorAlert from '../components/IsErrorAlert'
import MovieInListCard from '../components/MovieInListCard'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'

const HomePage = () => {
    const [timeWindow, setTimeWindow] = useState<string>('day')

    const topRatedMovies = useTopRatedMovies()

    const nowPlayingMovies = useNowPlayingMovies()

	const trendingMovies = useTrendingMovies(timeWindow)

    useEffect(() => {
    }, [timeWindow])

    if (topRatedMovies.isError || nowPlayingMovies.isError || trendingMovies.isError) {
		return <IsErrorAlert />
	}

	return (
		<>
			<h2 className="my-5">
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


            <h2 className="mt-5 mb-4">
                <span className="text-border">
                    Trending
                </span>
			</h2>
            <ButtonGroup size="sm">
                <Button
                    variant="warning"
                    className={`mb-4 ${timeWindow === 'day' ? 'active-button' : ''}`}
                    onClick={() => setTimeWindow('day')}
                    >
                        This day
                </Button>
                <Button
                    variant="warning"
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

            <h2 className="my-5">
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
		</>
	)
}

export default HomePage