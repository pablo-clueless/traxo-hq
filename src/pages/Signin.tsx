import { Link, useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { ArrowLeft } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import Cookies from "universal-cookie"
import { useFormik } from "formik"
import axios from "axios"

import { Alert, Button, Input, Spinner } from "components"
import { HttpErrorProps, UserProps } from "types"
import { usePageTitle } from "hooks"
import state from "store"

const initialValues = { email: "", password: "" }

const Signin = () => {
	usePageTitle("Sign in to your account")
	const [error, setError] = useState("")
	const navigate = useNavigate()
	const cookies = new Cookies()

	const { isPending, mutateAsync } = useMutation({
		mutationFn: (payload: typeof initialValues) =>
			axios.post(`${import.meta.env.VITE_API_URI}/auth/signin`, payload),
		mutationKey: ["signup"],
		onSuccess: ({ data }) => {
			const { token, user } = data
			cookies.set("user-token", token)
			state.user = user as UserProps
			navigate("/dashboard")
		},
		onError: (error: HttpErrorProps) => {
			const {
				response: { data },
			} = error
			setError(data.message)
		},
	})

	const { handleChange, handleSubmit } = useFormik({
		initialValues,
		onSubmit: (data) => mutateAsync(data),
	})

	useEffect(() => {
		const timeout = setTimeout(() => {
			setError("")
		}, 3000)
		return () => clearTimeout(timeout)
	}, [error])

	return (
		<>
			{error && (
				<Alert
					type="error"
					message={error}
					onClose={() => setError("")}
					header="Signin Error"
				/>
			)}
			<main className="grid h-screen w-full place-items-center bg-accent/[0.6] px-5">
				<div className="w-full rounded border-2 border-dark bg-white p-4 shadow-2xl lg:w-[400px]">
					<p className="text-2xl lg:text-4xl">Signin</p>
					<p className="text-sm font-light lg:text-base">
						Enter your email address and password to log in to the portal
					</p>
					<form onSubmit={handleSubmit} className="my-4 flex w-full flex-col gap-4">
						<Input label="Email" type="email" id="email" onChange={handleChange} />
						<Input
							label="Password"
							type="password"
							id="password"
							onChange={handleChange}
						/>
						<p className="text-left text-sm lg:text-base">
							Forgot password?{" "}
							<Link to="/reset-password" className="link text-main">
								Reset
							</Link>
						</p>
						<Button as="button" type="submit">
							{isPending ? <Spinner /> : "Proceed"}
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
		</>
	)
}

export default Signin
