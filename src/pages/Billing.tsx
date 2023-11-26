import { usePageTitle } from "hooks"
import styles from "utils/styles"

const Billing = () => {
	usePageTitle("Billing")

	return (
		<div className="h-full w-full">
			<section className="my-6 w-full py-5">
				<p className={styles.label}>Billing</p>
			</section>
		</div>
	)
}

export default Billing
