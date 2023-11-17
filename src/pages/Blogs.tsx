import { usePageTitle, usescrollToTop } from "hooks"
import { Footer, Navbar } from "components"
import styles from "utils/styles"

const Blogs = () => {
	usePageTitle("Keep abreast with industry news")
	usescrollToTop()

	return (
		<>
			<Navbar />
			<main className="min-h-[50dvh] w-full px-5 py-10 lg:px-20">
				<p className={styles.heading}>Blog</p>
				<p className={styles.subheading}>
					Whether it's industry news or tech articles, we've got you covered.
				</p>
				<section className="my-6 w-full">
					<p className="text-xl lg:text-3xl">Featured</p>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default Blogs
