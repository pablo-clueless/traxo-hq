import { Link } from "react-router-dom"

import { footerLinks, socialLinks } from "constants"
import styles from "utils/styles"

const Footer = () => {
	return (
		<footer className="flex w-full flex-col bg-dark px-5 pb-6 pt-10 text-light lg:px-20">
			<section className="flex w-full flex-wrap items-start gap-5">
				<div className="flex w-full flex-col lg:w-[400px]">
					<Link to="/" className="text-5xl">
						TraxoHQ
					</Link>
				</div>
				<div className="flex w-full flex-1 flex-wrap justify-between gap-5 lg:gap-0">
					{footerLinks.map(({ heading, links }) => (
						<div key={heading} className="flex min-w-[250px] flex-1 flex-col gap-3">
							<p className="text-lg">{heading}</p>
							<div className="flex flex-col gap-2">
								{links.map((link) => (
									<Link
										key={link.label}
										to={link.url}
										className="font-jost text-sm font-extralight hover:text-highlight lg:text-base">
										{link.label}
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			</section>
			<hr className="my-5" />
			<section className="flex w-full flex-col items-center justify-between lg:flex-row">
				<p className="text-center text-xs lg:text-left lg:text-sm">
					Copyright &copy; {new Date().getFullYear()} |{" "}
					<strong className="font-semibold">&ldquo;TraxoHQ&rdquo;</strong> and the{" "}
					<strong className="font-semibold">&ldquo;TraxoHQ logo&rdquo;</strong> are
					registered trademarks.
				</p>
				<div className="flex items-center gap-4">
					{socialLinks.map((link, index) => (
						<a key={index} {...link.url} className={`text-light ${styles.iconLink}`}>
							{link.icon}
						</a>
					))}
				</div>
			</section>
			<section className="w-full"></section>
		</footer>
	)
}

export default Footer
