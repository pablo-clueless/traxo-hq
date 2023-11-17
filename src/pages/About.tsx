import { usePageTitle, usescrollToTop } from "hooks"
import { Footer, Navbar } from "components"
import { traxo } from "assets/images"
import styles from "utils/styles"

const About = () => {
	usePageTitle("Everything about TraxoHQ")
	usescrollToTop()

	return (
		<>
			<Navbar />
			<main className="w-full px-5 py-10 lg:px-20">
				<p className={styles.heading}>
					<img src={traxo} alt="traxo logo" className="w-20" /> TraxoHQ
				</p>
				<p className={styles.subheading}>We're here for one reason; growth.</p>
				<section className="my-4 w-full">
					<p className="mb-8 text-base leading-relaxed lg:text-xl">
						Welcome to <b className="text-main">TraxoHQ</b>, where learning meets
						innovation. We are passionate about providing an exceptional online
						learning experience tailored to your needs. Our platform boasts a diverse
						range of high-quality courses taught by industry experts, ensuring you
						gain valuable skills and knowledge. What sets us apart is our commitment
						to an interactive and engaging learning environment. From quizzes and
						projects to community forums, we strive to make learning enjoyable and
						effective. Enjoy the flexibility to learn at your own pace, connect with
						like-minded learners, and embark on a journey of personal and professional
						growth. Join us today and discover the endless possibilities that learning
						with <b className="text-main">TraxoHQ</b> brings to your fingertips.
					</p>
					<p className="mb-8 text-base leading-relaxed lg:text-xl">
						At <b className="text-main">TraxoHQ</b>, we believe in making education
						accessible. Our platform offers affordable pricing options and free
						courses, ensuring that everyone has the opportunity to learn and thrive.
						Whether you're aiming for career advancement, exploring new passions, or
						enhancing existing skills, we're here to support your educational journey.
						Realize your potential with the latest in learning technology and
						innovation. Explore our courses, connect with our vibrant community, and
						chart your course to success. Thank you for choosing{" "}
						<b className="text-main">TraxoHQ</b> as your partner in learning and
						growth.
					</p>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default About
