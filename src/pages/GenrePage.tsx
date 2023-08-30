import { useParams, useSearchParams } from 'react-router-dom'
import { useIsFetching } from '@tanstack/react-query'
import IsErrorAlert from '../components/IsErrorAlert'
import MovieInListCard from '../components/MovieInListCard'
import Pagination from '../components/Pagination'
import useGenre from '../hooks/useGenre'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const GenrePage = () => {
    const isFetching = useIsFetching()

    const { id, name } = useParams()
    const genreId = Number(id)
    const genreName = name

    const [searchParams, setSearchParams] = useSearchParams()
    const page = Number(searchParams.get('page')) || 1

    const {
        data,
        isError,
    } = useGenre(genreId, page)

    if (isError) {
		return <IsErrorAlert />
	}

	return !isFetching ? (
        <>
            <h1 className="h2 py-5"><span className="text-border">{genreName}</span></h1>

            { data && data.results && (
                <>
                    <p>{data.total_results.toLocaleString()} results for {genreName}</p>

                    <Row xs={1} md={3} lg={5} className="g-4">
                        {data.results.map(movie => (
                            <Col key={movie.id}>
                            <MovieInListCard 
                                poster_path={movie.poster_path} 
                                title={movie.title} 
                                id={movie.id} 
                                vote_average={movie.vote_average}
                                release_date={movie.release_date} />
                        </Col>
                        ))}
                    </Row>

                    <Pagination
                        page={data.page}
                        totalPages={data.total_pages}
                        hasPreviousPage={data.page > 1}
                        hasNextPage={data.page < data.total_pages}
                        onPreviousPage={ 
                            () => { setSearchParams({ page: (Number(page) - 1).toString() }) }
                        }
                        onNextPage={ 
                            () => { setSearchParams({ page: (Number(page) + 1).toString() }) }
                        }
                    />
                </>
            )}
        </>
    ) : null
}

export default GenrePage
