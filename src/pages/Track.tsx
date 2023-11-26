import { ArrowLeft, ArrowRight } from "@phosphor-icons/react"
import { useNavigate, useParams } from "react-router-dom"

import { usePageTitle, usescrollToTop } from "hooks"
import { Footer, Loader, Navbar } from "components"
import { LearningTracks } from "constants/index"
import { capitalize } from "utils"
import styles from "utils/styles"

const Track = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	usescrollToTop()

	const track = LearningTracks.find((track) => track.id === id)
	usePageTitle(`${String(capitalize(track?.name))}`)

	if (!track) return <Loader />

	return (
		<>
			<Navbar />
			<main className="w-full">
				<div className="px-5 py-5 lg:px-20">
					<button
						onClick={() => navigate(-1)}
						className="flex items-center gap-1 transition-all duration-300 hover:gap-3">
						<ArrowLeft /> Back
					</button>
				</div>
				<section className="flex w-full flex-col items-center px-5 py-10 lg:px-20">
					<p className="flex items-center gap-1 text-3xl capitalize text-main lg:text-6xl">
						{track.icon}
						{track.name}
					</p>
					<p className="mt-3 w-full text-center font-jost text-lg lg:w-1/3 lg:text-xl">
						{track.description}
					</p>
					<div className="my-10 grid w-full grid-cols-1 gap-20 lg:grid-cols-3">
						{track.courses.map((course) => (
							<div key={course.id} className="">
								<p className="text-lg capitalize lg:text-2xl">{course.name}</p>
								<p className="my-3 min-h-[100px] w-full font-jost text-sm font-medium lg:w-2/3 lg:text-base">
									{course.description}
								</p>
								<p className="font-jost text-sm lg:text-base">
									Duration:{" "}
									<b className="text-accent">
										{course.modules?.reduce((acc, cur) => cur.duration + acc, 0)} weeks
									</b>
								</p>
								<div className="mt-10 w-full">
									<p className={styles.label}>Modules</p>
									<ul className="flex list-disc flex-col gap-1">
										{course.modules?.map((module) => (
											<li key={module.id} className="text-xs lg:text-sm">
												{module.name}
											</li>
										))}
									</ul>
								</div>
								<div className="flex w-full items-center justify-end">
									<button
										onClick={() => navigate(`/tracks/${track.id}/${course.id}`)}
										className={styles.button}>
										View <ArrowRight />
									</button>
								</div>
							</div>
						))}
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default Track
