import { ArrowLeft } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import { useFormik } from "formik"

import { Button, Input } from "components"
import { usePageTitle } from "hooks"

const initialValues = { email: "" }

const ResetPassword = () => {
	usePageTitle("Reset your password")

	const { handleChange, handleSubmit } = useFormik({
		initialValues,
		onSubmit: (data) => console.log(data),
	})

	return (
		<main className="grid h-screen w-full place-items-center bg-highlight/[0.6] px-5">
			<div className="w-full rounded border-2 border-dark bg-white p-4 shadow-2xl lg:w-[400px]">
				<p className="text-2xl lg:text-4xl">Reset Password</p>
				<p className="text-sm font-light lg:text-base">
					Having issues remembering your password? You can recover it using the email
					associated with your account.
				</p>
				<form onSubmit={handleSubmit} className="my-4 flex w-full flex-col gap-4">
					<Input label="Email" type="email" id="email" onChange={handleChange} />
					<Button as="button" type="submit">
						Proceed
					</Button>
				</form>
				<p className="text-center text-sm lg:text-base">
					Remember your password?{" "}
					<Link to="/signin" className="link text-main">
						Sign in
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

export default ResetPassword
