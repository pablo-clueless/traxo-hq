import { Link, NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

import { navLinks } from "constants"
import Hamburger from "./Hamburger"
import styles from "utils/styles"
import Button from "./Button"
import Menu from "./Menu"

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false)
	const [toggle, setToggle] = useState(false)

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 700)
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<>
			<nav
				className={`left-0 top-0 !z-[5] flex w-full items-center justify-between bg-transparent bg-white px-4 py-4 shadow lg:px-20 ${
					scrolled ? "fixed" : "static"
				}`}>
				<div className="flex items-center">
					<Hamburger toggle={toggle} onClick={() => setToggle(!toggle)} />
					<Link to="/">TraxoHQ</Link>
				</div>
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
			{toggle && <Menu toggle={toggle} />}
		</>
	)
}

export default Navbar
