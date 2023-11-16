import { ArrowLeft } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import { useFormik } from "formik"

import { Button, Input } from "components"
import { usePageTitle } from "hooks"

const initialValues = { email: "", password: "" }

const Signin = () => {
	usePageTitle("Sign in to your account")

	const { handleChange, handleSubmit } = useFormik({
		initialValues,
		onSubmit: (data) => console.log(data),
	})

	return (
		<main className="grid h-screen w-full place-items-center bg-accent/[0.6] px-5">
			<div className="w-full rounded border-2 border-dark bg-white p-4 shadow-2xl lg:w-[400px]">
				<p className="text-2xl lg:text-4xl">Signin</p>
				<p className="text-sm font-light lg:text-base">
					Enter your email address and password to log in to the portal
				</p>
				<form onSubmit={handleSubmit} className="my-4 flex w-full flex-col gap-4">
					<Input label="Email" type="email" name="email" onChange={handleChange} />
					<Input
						label="Password"
						type="password"
						name="password"
						onChange={handleChange}
					/>
					<p className="text-left text-sm lg:text-base">
						Forgot password?{" "}
						<Link to="/reset-password" className="link text-main">
							Reset
						</Link>
					</p>
					<Button as="button" type="submit">
						Proceed
					</Button>
				</form>
				<p className="text-center text-sm lg:text-base">
					Don't have an account?{" "}
					<Link to="/signup" className="link text-main">
						Signup
					</Link>
				</p>
				<div className="mt-5 flex w-full items-center justify-center">
					<Link
						to="/"
						className="link flex items-center gap-1 text-center text-main">
						<ArrowLeft />
						Home
					</Link>
				</div>
			</div>
		</main>
	)
}

export default Signin
