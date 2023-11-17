import { Link, NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

import { navLinks } from "constants"
import styles from "utils/styles"
import Button from "./Button"

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 700)
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<nav
			className={`left-0 top-0 !z-[5] flex w-full items-center justify-between bg-transparent bg-white px-4 py-4 lg:px-20 shadow ${scrolled ? "fixed" : "static"
				}`}>
			<Link to="/">TraxoHQ</Link>
			<div className="flex items-center gap-10">
				<div className="hidden items-center gap-4 lg:flex">
					{navLinks.map((link, index) => (
						<NavLink
							key={index}
							to={link.url}
							className={({ isActive }) => styles.navLink(isActive)}>
							{link.label}
						</NavLink>
					))}
				</div>
				<Button as="link" to="/signup">
					register now
				</Button>
			</div>
		</nav>
	)
}

export default Navbar
