import { usePageTitle } from "hooks"
import styles from "utils/styles"

const Inbox = () => {
	usePageTitle("Inbox")

	return (
		<div className="h-full w-full">
			<section className="my-6 w-full py-5">
				<p className={styles.label}>Inbox</p>
			</section>
		</div>
	)
}

export default Inbox
