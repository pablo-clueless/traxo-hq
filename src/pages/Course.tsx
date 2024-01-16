import { useNavigate, useParams } from "react-router-dom"
import { ArrowLeft } from "@phosphor-icons/react"
import { useEffect, useState } from "react"

import { usePageTitle, usescrollToTop } from "hooks"
import { Footer, Loader, Navbar } from "components"
import { LearningTracks } from "constants/index"
import { CourseProps } from "types"
import { capitalize } from "utils"
import styles from "utils/styles"

const Course = () => {
	const [course, setCourse] = useState<CourseProps | null>(null)
	usePageTitle(`${capitalize.Words(course?.name)}`)
	const { id, courseId } = useParams()
	const navigate = useNavigate()
	usescrollToTop()

	useEffect(() => {
		const track = LearningTracks.find((track) => track.id === id)
		if (track) {
			const course = track.courses.find((course) => course.id === courseId)
			if (course) {
				setCourse(course)
			}
		}
	}, [])

	if (!course) return <Loader />

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
				<section className="flex w-full flex-col px-5 py-10 lg:px-20">
					<p className="flex items-center gap-1 text-3xl capitalize text-main lg:text-6xl">
						{course.name}
					</p>
					<p className="my-3 w-full font-jost text-lg lg:w-1/3 lg:text-xl">
						{course.description}
					</p>
					<p className="font-jost text-sm lg:text-base">
						Duration:{" "}
						<b className="text-accent">
							{course.modules?.reduce((acc, cor) => cor.duration + acc, 0)} weeks
						</b>
					</p>
					<div className="mt-10 w-full">
						<p className={styles.label}>Modules</p>
						<div className="my-4 grid grid-cols-1 gap-4 lg:grid-cols-6">
							{course.modules?.map((module) => (
								<div
									key={module.id}
									className="flex w-full flex-col gap-2 rounded bg-main p-4">
									<p className="min-h-[50px]">{module.name}</p>
									<p className="text-xs lg:text-sm">Duration: {module.duration} weeks</p>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default Course
