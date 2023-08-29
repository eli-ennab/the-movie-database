import { useQuery } from '@tanstack/react-query'
import { getNowPlayingMovies, getMostPopularMovies, getTopRatedMovies } from "../services/TheMovieDB_API"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import IsErrorAlert from '../components/IsErrorAlert'
import MovieInListCard from '../components/MovieInListCard'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const HomePage = () => {

    const topRatedMovies = useQuery(
        ['topRatedMovies'],
        getTopRatedMovies,
    )

	const mostPopularMovies = useQuery(
        ['mostPopularMovies'],
        getMostPopularMovies,
    )

	const nowPlayingMovies = useQuery(
        ['latestMovies'],
        getNowPlayingMovies,
    )

	if (topRatedMovies.data === undefined) {
        return
    }

	if (mostPopularMovies.data === undefined) {
        return
    }

	if (nowPlayingMovies.data === undefined) {
        return
    }

    if (topRatedMovies.isError || mostPopularMovies.isError || nowPlayingMovies.isError) {
		return (
            <IsErrorAlert />
		)
	}

	return (
		<>
			<h2 className="my-5">
                <span className="text-border">
                    Top rated movies
                </span>
			</h2>
			{ topRatedMovies.data.results && (
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

            <h2 className="my-5">
                <span className="text-border">
                    Now playing
                </span>
			</h2>
			{ nowPlayingMovies.data.results && (
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

            <h2 className="my-5">
                <span className="text-border">
                    Most popular movies
                </span>
			</h2>
            <ButtonGroup size="sm">
                <Button
                    variant="warning"
                    className="mb-4"
                    >
                        This week
                </Button>
                <Button
                    variant="warning"
                    className="mb-4"
                    >
                        This month
                </Button>
            </ButtonGroup>

			{ mostPopularMovies.data.results && (
                <Row xs={1} md={3} lg={5} className="g-4">
                    {mostPopularMovies.data.results.slice(0, 10).map(movie => (
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