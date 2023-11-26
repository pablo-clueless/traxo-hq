import { useSnapshot } from "valtio"

import { usePageTitle } from "hooks"
import styles from "utils/styles"
import state from "store"

const Learning = () => {
	const snap = useSnapshot(state)

	usePageTitle(`${snap.user?.firstName} ${snap.user?.lastName}`)

	return (
		<div className="h-full w-full">
			<section className="my-6 w-full py-5">
				<p className={styles.label}>Modules</p>
			</section>
		</div>
	)
}

export default Learning
