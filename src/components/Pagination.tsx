import React from 'react'
import Button from 'react-bootstrap/Button'

interface IPaginationProps {
	page: number
	totalPages: number
	hasPreviousPage: boolean
	hasNextPage: boolean
	onPreviousPage: () => void
	onNextPage: () => void
}

const Pagination: React.FC<IPaginationProps> = (
	{
		page,
		totalPages,
		hasPreviousPage,
		hasNextPage,
		onPreviousPage,
		onNextPage,
	}) => {

	return (
		<div className="pagination-wrapper d-flex justify-content-between align-items-center my-3">
			<div className="prev">
				<Button
					disabled={!hasPreviousPage}
					onClick={onPreviousPage}
					variant="dark"
				>Previous Page</Button>
			</div>

			<div className="page">Page {page}/{totalPages}</div>

			<div className="next">
				<Button
					disabled={!hasNextPage}
					onClick={onNextPage}
					variant="dark"
				>Next Page</Button>
			</div>
		</div>
	)
}

export default Pagination