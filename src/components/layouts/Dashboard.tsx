import { NavLink, Outlet } from "react-router-dom"

import { DashboardLinks } from "constants"

const Dashboard = () => {
	return (
		<main className="flex h-screen w-full items-start">
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
				<Outlet />
			</section>
		</main>
	)
}

export default Dashboard
