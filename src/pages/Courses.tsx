import { usePageTitle } from "hooks"
import styles from "utils/styles"

const Courses = () => {
	usePageTitle("Courses")

	return (
		<div className="h-full w-full">
			<section className="my-6 w-full py-5">
				<p className={styles.label}>Courses</p>
			</section>
		</div>
	)
}

export default Courses
