import { NavLink } from "react-router-dom"
import { ComponentProps } from "react"

import { navLinks, socialLinks } from "constants"
import styles from "utils/styles"

type Props = ComponentProps<"div"> & {
	toggle: boolean
}

const Menu = (props: Props) => {
	return (
		<div
			className={`fixed left-1/2 top-0 !z-[5] flex h-screen w-1/2 flex-col bg-white px-5 transition-transform lg:hidden ${
				props.toggle ? "translate-x-0" : "translate-x-full"
			}`}
			{...props}>
			<div className="flex h-full w-full flex-col justify-between py-6">
				<div className="flex w-full flex-col gap-4">
					{navLinks.map((link, index) => (
						<NavLink
							key={index}
							to={link.url}
							className={({ isActive }) => styles.navLink(isActive, true)}>
							{link.label}
						</NavLink>
					))}
				</div>
				<div className="flex flex-col items-center">
					<p className="text-sm">
						<b>TraxoHQ</b> &copy;{new Date().getFullYear()}
					</p>
					<div className="flex items-center gap-4">
						{socialLinks.map((link, index) => (
							<a key={index} {...link.url} className={`text-black ${styles.iconLink}`}>
								{link.icon}
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Menu
