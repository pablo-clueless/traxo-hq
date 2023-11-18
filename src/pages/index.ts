import React from "react"

const About = React.lazy(() => import("./About"))
const Blog = React.lazy(() => import("./Blog"))
const Blogs = React.lazy(() => import("./Blogs"))
const Contact = React.lazy(() => import("./Contact"))
const Course = React.lazy(() => import("./Course"))
const Home = React.lazy(() => import("./Home"))
const Learning = React.lazy(() => import("./Learning"))
const ResetPassword = React.lazy(() => import("./ResetPassword"))
const Signin = React.lazy(() => import("./Signin"))
const Signup = React.lazy(() => import("./Signup"))
const Track = React.lazy(() => import("./Track"))
const Tracks = React.lazy(() => import("./Tracks"))

export {
	About,
	Blog,
	Blogs,
	Contact,
	Course,
	Home,
	Learning,
	ResetPassword,
	Signin,
	Signup,
	Track,
	Tracks,
}
