import React from "react"

const About = React.lazy(() => import("./About"))
const Billing = React.lazy(() => import("./Billing"))
const Blog = React.lazy(() => import("./Blog"))
const Blogs = React.lazy(() => import("./Blogs"))
const Book = React.lazy(() => import("./Book"))
const Contact = React.lazy(() => import("./Contact"))
const Course = React.lazy(() => import("./Course"))
const Courses = React.lazy(() => import("./Courses"))
const Home = React.lazy(() => import("./Home"))
const Inbox = React.lazy(() => import("./Inbox"))
const Learning = React.lazy(() => import("./Learning"))
const Library = React.lazy(() => import("./Library"))
const Notifications = React.lazy(() => import("./Notifications"))
const ResetPassword = React.lazy(() => import("./ResetPassword"))
const Settings = React.lazy(() => import("./Settings"))
const Signin = React.lazy(() => import("./Signin"))
const Signup = React.lazy(() => import("./Signup"))
const Track = React.lazy(() => import("./Track"))
const Tracks = React.lazy(() => import("./Tracks"))

export {
	About,
	Billing,
	Blog,
	Blogs,
	Book,
	Contact,
	Course,
	Courses,
	Inbox,
	Home,
	Learning,
	Library,
	Notifications,
	ResetPassword,
	Settings,
	Signin,
	Signup,
	Track,
	Tracks,
}
