import { usePageTitle } from "hooks"
import styles from "utils/styles"

const Settings = () => {
	usePageTitle("Settings")

	return (
		<div className="h-full w-full">
			<section className="my-6 w-full py-5">
				<p className={styles.label}>Settings</p>
			</section>
		</div>
	)
}

export default Settings
