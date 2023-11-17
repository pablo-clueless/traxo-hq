import { Link } from "react-router-dom"

import { Benefits, LearningTracks, studyPros } from "constants"
import { usePageTitle, usescrollToTop } from "hooks"
import { Button, Footer, Navbar } from "components"
import { image_1, learning } from "assets/images"
import styles from "utils/styles"

const Home = () => {
	usePageTitle("Home")
	usescrollToTop()

	return (
		<>
			<Navbar />
			<main className="w-full">
				<section className="grid min-h-[75dvh] w-full grid-cols-1 border-y border-dark lg:grid-cols-2">
					<div className="flex h-full w-full flex-col items-start justify-center bg-main px-5 py-20">
						<p className="text-5xl lg:text-8xl">
							Keep learning & unlock great{" "}
							<span className="text-highlight">potential.</span>
						</p>
						<p className="my-4 font-jost text-sm font-semibold lg:text-lg">
							Your path to a better career starts here. We will be with you every step
							of the way.
						</p>
						<div className="flex w-full items-center gap-4 lg:w-1/2">
							<Button as="link" to="/signup" width="w-full">
								create account
							</Button>
							<Button as="link" to="/tracks" width="w-full">
								view tracks
							</Button>
						</div>
					</div>
					<div className="flex h-full w-full items-center justify-center bg-accent/20">
						<img src={learning} alt="" className="h-full w-full object-cover" />
					</div>
				</section>
				<section className="grid w-full grid-cols-1 gap-4 px-5 py-10 lg:grid-cols-4 lg:px-20">
					{studyPros.map((item, index) => (
						<div key={index} className="min-h-[150px] w-full p-4">
							<div className="flex aspect-square w-12 items-center justify-center rounded-full bg-highlight text-2xl text-dark shadow-protrusion ">
								{item.icon}
							</div>
							<p className="mt-4 text-xl">{item.label}</p>
							<p className="font-jost font-light">{item.content}</p>
						</div>
					))}
				</section>
				<section className="flex w-full flex-col items-center px-5 py-10 lg:px-20">
					<p className={styles.heading}>Tracks</p>
					<div className="my-5 flex w-full flex-wrap items-center justify-center gap-20">
						{LearningTracks.map((track) => (
							<Link
								key={track.id}
								to={`/tracks/${track.id}`}
								className="group relative aspect-square w-[200px] cursor-pointer overflow-hidden rounded-md border-2 border-dark bg-highlight shadow-protrusion lg:w-[250px]">
								<span className="absolute left-0 top-0 grid h-full w-full place-items-center text-9xl text-dark/30 transition-all duration-300 group-hover:scale-125 lg:text-[150px]">
									{track.icon}
								</span>
								<div className="flex h-full w-full flex-col items-center justify-center">
									<p className="text-xl capitalize lg:text-2xl">{track.name}</p>
								</div>
							</Link>
						))}
					</div>
				</section>
				<section className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
					<div className="h-full w-full px-5 py-10 lg:px-20">
						<p className={styles.label}>Why TraxoHQ</p>
						<p className="my-2 text-2xl lg:text-4xl">
							Get access to the best courses
						</p>
						<p className="font-jost lg:text-lg">
							Join our learning platform for an enriching educational experience filled
							with high-quality content, expert instructors, and a diverse array of
							courses spanning various topics and skill levels. Benefit from an
							interactive learning environment with quizzes, projects, and discussion
							forums, ensuring an engaging and enjoyable journey. Enjoy the flexibility
							to learn at your own pace, anytime, anywhere, and connect with fellow
							learners through our vibrant community. Whether you're seeking career
							advancement, exploring new interests, or enhancing existing skills, our
							platform offers a pathway to success. Join us and embark on a journey of
							knowledge, growth, and community.
						</p>
						<img
							src={image_1}
							alt=""
							className="mt-4 h-[250px] w-full rounded object-cover object-top lg:h-[370px]"
						/>
					</div>
					<div className="flex h-full w-full flex-col items-start gap-4 px-5 py-10">
						{Benefits.map((benefit, index) => (
							<div
								key={index}
								className="flex w-full cursor-pointer items-center gap-4 rounded bg-main p-4 transition-all duration-300 hover:scale-[1.02]">
								<span className="grid place-items-center rounded bg-highlight p-2 text-xl shadow-protrusion lg:text-3xl">
									{benefit.icon}
								</span>
								<div className="">
									<p className="text-xs lg:text-sm">{benefit.label}</p>
									<p className="font-jost text-[10px] text-light lg:text-xs">
										{benefit.content}
									</p>
								</div>
							</div>
						))}
					</div>
				</section>
				<section className="flex w-full flex-col items-center bg-highlight/[0.6] px-5 py-10 lg:px-20">
					<p className={styles.heading}>Testimonials</p>
					<div className="my-4 flex w-full items-center gap-4"></div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default Home
