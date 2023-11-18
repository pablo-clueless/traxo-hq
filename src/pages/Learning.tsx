import { useSnapshot } from "valtio"
import { useEffect } from "react"

import { avatar } from "assets/images"
import { Loader } from "components"
import { UserProps } from "types"
import styles from "utils/styles"
import state from "store"

const Learning = () => {
	const snap = useSnapshot(state)

	const user: UserProps = {
		id: "9bb15879-9285-4e9c-880b-5ddb02456472",
		firstName: "Bernard",
		lastName: "Peck",
		email: "bpeck0@mac.com",
		phone: "+251 744 431 2973",
		image: avatar,
	}

	useEffect(() => {
		state.login(user)
	}, [])

	if (!snap.user) return <Loader />

	return (
		<div className="h-full w-full">
			<div className="flex w-full items-center justify-between">
				<p className="text-lg lg:text-xl">
					Welcome back, <b className="text-main">{snap.user.firstName}</b>
				</p>
			</div>
			<section className="my-6 w-full py-5">
				<p className={styles.label}>Modules</p>
			</section>
			<section className="my-6 w-full py-5">
				<p className={styles.label}>Modules</p>
			</section>
		</div>
	)
}

export default Learning
