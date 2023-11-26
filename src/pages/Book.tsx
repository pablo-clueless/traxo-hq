import { useParams } from "react-router-dom"

import { library } from "library"
import styles from "utils/styles"

const Book = () => {
	const { id } = useParams()

	const book = library.find((book) => book.id === id)

	if (!book) return "No book with this id"

	return (
		<div className="w-full">
			<section className="mt-5 w-full">
				<div className="flex w-full items-center justify-between">
					<p className={styles.label}>{book.title}</p>
					<p className="font-jost text-sm font-medium uppercase">{book.course}</p>
				</div>
			</section>
		</div>
	)
}

export default Book
