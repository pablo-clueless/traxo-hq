import { Route, Routes } from "react-router-dom"
import { Suspense } from "react"

import { useConcurrentTransition } from "hooks"
import { Loader } from "components"
import {
	About,
	Blog,
	Blogs,
	Contact,
	Course,
	Home,
	ResetPassword,
	Signin,
	Signup,
	Track,
	Tracks,
} from "pages"

const Router = () => {
	const location = useConcurrentTransition()

	return (
		<Suspense fallback={<Loader />}>
			<Routes location={location}>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/blog" element={<Blogs />} />
				<Route path="/blog/:id" element={<Blog />} />
				<Route path="/tracks" element={<Tracks />} />
				<Route path="/tracks/:id" element={<Track />} />
				<Route path="/tracks/:id/:courseId" element={<Course />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/reset-password" element={<ResetPassword />} />
			</Routes>
		</Suspense>
	)
}

export default Router
