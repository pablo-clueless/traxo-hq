import { ArrowRight } from "@phosphor-icons/react"
import { useNavigate } from "react-router-dom"

import { usePageTitle, usescrollToTop } from "hooks"
import { Footer, Navbar } from "components"
import { LearningTracks } from "constants"
import styles from "utils/styles"

const Tracks = () => {
	const navigate = useNavigate()
	usePageTitle("See what we offer")
	usescrollToTop()

	return (
		<>
			<Navbar />
			<main className="w-full">
				<section className="grid w-full grid-cols-1 gap-5 px-5 py-10 lg:min-h-[50dvh] lg:grid-cols-3 lg:px-20">
					{LearningTracks.map((track) => (
						<div key={track.id} className="w-full">
							<p className="mb-3 text-3xl capitalize lg:text-6xl">{track.name}</p>
							<p className="min-h-[150px] font-jost text-base font-medium lg:text-lg">
								{track.description}
							</p>
							<button
								onClick={() => navigate(`/tracks/${track.id}`)}
								className={styles.button}>
								Learn More <ArrowRight weight="bold" />
							</button>
						</div>
					))}
				</section>
			</main>
			<Footer />
		</>
	)
}

export default Tracks
