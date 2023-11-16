import React from "react"

const About = React.lazy(() => import("./About"))
const Blog = React.lazy(() => import("./Blog"))
const Contact = React.lazy(() => import("./Contact"))
const Home = React.lazy(() => import("./Home"))
const ResetPassword = React.lazy(() => import("./ResetPassword"))
const Signin = React.lazy(() => import("./Signin"))
const Signup = React.lazy(() => import("./Signup"))
const Tracks = React.lazy(() => import("./Tracks"))

export { About, Blog, Contact, Home, ResetPassword, Signin, Signup, Tracks }
