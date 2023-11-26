import { Link } from "react-router-dom"
import { useSnapshot } from "valtio"

import { usePageTitle } from "hooks"
import { library } from "library"
import styles from "utils/styles"
import { BookProps } from "types"
import state from "store"

const Library = () => {
	const snap = useSnapshot(state)
	usePageTitle("Library")

	const course = snap.user?.track

	return (
		<div className="w-full">
			<section className="my-6 w-full py-5">
				<p className={styles.label}>Library</p>
				<div className="mt-10 flex w-full flex-wrap items-center justify-center gap-5">
					{library
						.filter((book) => book.course === course)
						.map((book: BookProps) => (
							<Link
								to={`/dashboard/library/${book.id}`}
								key={book.id}
								className="aspect-[2/3] w-[200px] border p-2">
								<img
									src={book.cover}
									alt=""
									className="h-3/4 w-full object-cover object-center"
								/>
								<p className="text-sm">{book.title}</p>
								<p className="font-jost text-xs">by {book.author}</p>
								<p className="font-jost text-xs uppercase">{book.course}</p>
							</Link>
						))}
				</div>
			</section>
		</div>
	)
}

export default Library
