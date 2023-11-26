import { usePageTitle } from "hooks"
import styles from "utils/styles"

const Notifications = () => {
	usePageTitle("Notifications")

	return (
		<div className="h-full w-full">
			<section className="my-6 w-full py-5">
				<p className={styles.label}>Notifications</p>
			</section>
		</div>
	)
}

export default Notifications
