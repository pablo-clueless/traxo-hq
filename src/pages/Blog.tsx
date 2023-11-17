import { useParams } from "react-router-dom"

import { Footer, Loader, Navbar } from "components"

const Blog = () => {
	const { id } = useParams()

	if (!id) return <Loader />

	return (
		<>
			<Navbar />
			<main className=""></main>
			<Footer />
		</>
	)
}

export default Blog
