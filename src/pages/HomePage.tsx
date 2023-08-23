import { useQuery } from '@tanstack/react-query'
import { getNowPlayingMovies, getMostPopularMovies, getTopRatedMovies } from "../services/TheMovieDB_API"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import MovieCard from '../components/MovieCard'

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

	return (
		<>
			<h2 className="py-5">
				Top rated movies
			</h2>
			{ topRatedMovies.data.results && (
				<Row xs={1} md={3} lg={5} className="g-4">
					{topRatedMovies.data.results.slice(0, 10).map(movie => (
						<Col key={movie.id}>
							<MovieCard poster_path={movie.poster_path} title={movie.title} />
						</Col>
					))}
				</Row>
			)}

			<h2 className="py-5">
				Now playing
			</h2>
			{ nowPlayingMovies.data.results && (
                <Row xs={1} md={3} lg={5} className="g-4">
                    {nowPlayingMovies.data.results.slice(0, 10).map(movie => (
                        <Col key={movie.id}>
                            <MovieCard poster_path={movie.poster_path} title={movie.title} />
                        </Col>
                    ))}
                </Row>
            )}

			<h2 className="py-5">
				Most popular movies
			</h2>
			{ mostPopularMovies.data.results && (
                <Row xs={1} md={3} lg={5} className="g-4">
                    {mostPopularMovies.data.results.slice(0, 10).map(movie => (
                        <Col key={movie.id}>
                            <MovieCard poster_path={movie.poster_path} title={movie.title} />
                        </Col>
                    ))}
                </Row>
            )}

		</>
	)
}

export default HomePage