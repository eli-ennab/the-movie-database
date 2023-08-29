import { useParams, useSearchParams } from 'react-router-dom'
import IsErrorAlert from '../components/IsErrorAlert'
import MovieInListCard from '../components/MovieInListCard'
import Pagination from '../components/Pagination'
import useGenre from '../hooks/useGenre'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const GenrePage = () => {
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

    return (
        <>
            <h1 className="h2 py-5"><span className="text-border">{genreName}</span></h1>

            { data && data.results && (
                <>
                    <p>Showing {data.results.length} results out of {data.total_results} sorted by popularity</p>

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
    )
}

export default GenrePage
