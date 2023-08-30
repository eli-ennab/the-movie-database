import { useIsFetching } from '@tanstack/react-query'

const PageNotFound = () => {
	const isFetching = useIsFetching()

	return !isFetching ? (
		<h1 className="h2 py-5">Page not found.</h1>
	) : null
}

export default PageNotFound