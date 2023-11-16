import { Route, Routes } from "react-router-dom"
import { Suspense } from "react"

import { useConcurrentTransition } from "hooks"
import { Loader } from "components"
import {
	About,
	Blog,
	Contact,
	Home,
	ResetPassword,
	Signin,
	Signup,
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
				<Route path="/blog" element={<Blog />} />
				<Route path="/tracks" element={<Tracks />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/reset-password" element={<ResetPassword />} />
			</Routes>
		</Suspense>
	)
}

export default Router
