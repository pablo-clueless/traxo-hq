import { Route, Routes } from "react-router-dom"
import { Suspense } from "react"

import { useConcurrentTransition } from "hooks"
import ProtectedRoutes from "./ProtectedRoutes"
import { Dashboard, Loader } from "components"
import {
	About,
	Billing,
	Blog,
	Blogs,
	Book,
	Contact,
	Course,
	Courses,
	Home,
	Inbox,
	Learning,
	Library,
	Notifications,
	ResetPassword,
	Settings,
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
				<Route element={<ProtectedRoutes />}>
					<Route path="/dashboard" element={<Dashboard />}>
						<Route index element={<Learning />} />
						<Route path="courses" element={<Courses />} />
						<Route path="library" element={<Library />} />
						<Route path="library/:id" element={<Book />} />
						<Route path="inbox" element={<Inbox />} />
						<Route path="notifications" element={<Notifications />} />
						<Route path="billing" element={<Billing />} />
						<Route path="settings" element={<Settings />} />
					</Route>
				</Route>
			</Routes>
		</Suspense>
	)
}

export default Router
