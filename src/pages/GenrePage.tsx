import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams, useSearchParams } from 'react-router-dom'
import { getMovieGenre } from '../services/TheMovieDB_API'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

const GenrePage = () => {
    const { id } = useParams()
    const genreId = Number(id)

    const [searchParams, setSearchParams] = useSearchParams()
    const page = Number(searchParams.get('page')) || 1

    const {
        data,
        isLoading,
        isError,
        isFetching,
        isPreviousData,
    } = useQuery({
        queryKey: ['genre', { genreId: genreId }, { currentPage: page }],
        queryFn: () => getMovieGenre(genreId, page),
        keepPreviousData : true
    })
    
    useEffect(() => {
        searchParams.set('page', page.toString())
        setSearchParams(searchParams)
    }, [page, searchParams, setSearchParams])

    if (data === undefined) {
        return
    }

    console.log("is previous data:", isPreviousData)

    return (
        <>
            <h1 className="py-4"></h1>

            <p>Showing {data.results.length} results out of {data.total_results}</p>

            { isError && (
                <p>Error</p>
            )}

            { isLoading && (
                <p>Loading</p>
            )}

            { data.results && (
                <Row xs={1} md={3} lg={5} className="g-4">
                    {data.results.map(movie => (
                        <Col key={movie.id}>
                            <MovieCard poster_path={movie.poster_path} title={movie.title} id={movie.id} />
                        </Col>
                    ))}
                </Row>
            )}

            { isFetching && (
                <p>Fetching</p>
            )}

            <Pagination
                page={data.page}
                totalPages={data.total_pages}
                hasPreviousPage={data.page > 1}
                hasNextPage={data.page < data.total_pages}
                onPreviousPage={() => { setSearchParams( { page: (Number(page) - 1).toString() }) }}
                onNextPage={() => { setSearchParams( { page: (Number(page) + 1).toString() }) }}
			/>
        </>
    )
}

export default GenrePage
