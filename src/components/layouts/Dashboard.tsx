import { NavLink, Outlet } from "react-router-dom"
import { useSnapshot } from "valtio"

import { DashboardLinks } from "constants/index"
import { useNetworkStatus } from "hooks"
import styles from "utils/styles"
import state from "store"

const Dashboard = () => {
	const online = useNetworkStatus()
	const snap = useSnapshot(state)

	return (
		<main className="flex h-screen w-full items-start overflow-y-hidden">
			<aside className="flex h-full w-auto flex-col bg-dark py-10 pr-4 lg:w-1/6">
				<div className="w-full"></div>
				<div className="flex w-full flex-col gap-4">
					{DashboardLinks.map((link, index) => (
						<NavLink
							key={index}
							to={link.url}
							className={({}) =>
								`flex items-center gap-1 rounded-e px-1 py-3 text-light transition-colors duration-300 hover:bg-light hover:text-dark`
							}>
							<span className="text-xl lg:text-2xl">{link.icon}</span>
							<p className="hidden text-lg capitalize lg:block">{link.label}</p>
						</NavLink>
					))}
				</div>
			</aside>
			<section className="flex h-full w-full flex-col px-5 py-10 lg:w-5/6">
				<div className="flex w-full items-center justify-between border-b py-3">
					<p className="text-lg lg:text-xl">
						Hello, <b className="text-main">{snap.user?.firstName}</b>
					</p>
					<div className={styles.networkStatus(online)}>
						{online ? "Online" : "Offline"}
					</div>
				</div>
				<div className="h-full w-full overflow-y-scroll">
					<Outlet />
				</div>
			</section>
		</main>
	)
}

export default Dashboard
