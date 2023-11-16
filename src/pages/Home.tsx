import { Button, Footer, Navbar } from "components"
import { studyPros } from "constants"
import { usePageTitle } from "hooks"
import styles from "utils/styles"

const Home = () => {
	usePageTitle("Home")

	return (
		<>
			<Navbar />
			<main className="w-full">
				<section className="grid h-[75dvh] w-full grid-cols-1 lg:grid-cols-2">
					<div className="flex h-full w-full flex-col items-start justify-center bg-main px-5">
						<p className="text-5xl lg:text-8xl">
							Keep learning & unlock great potential.
						</p>
						<p className="font-jost my-4 text-sm font-semibold lg:text-lg">
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
					<div className="h-full w-full bg-accent/20"></div>
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
					<p className={styles.heading}>The School</p>
				</section>
				<section className="flex w-full flex-col items-center px-5 py-10 lg:px-20">
					<p className={styles.heading}>Courses</p>
				</section>
				<section className="grid w-full grid-cols-1 gap-4 px-5 py-10 lg:grid-cols-2 lg:px-20">
					<div className="w-full h-full">
						<p className=""></p>
					</div>
					<div className="w-full h-full"></div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default Home
