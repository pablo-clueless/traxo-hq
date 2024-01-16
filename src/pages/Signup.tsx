import { useMutation, useQuery } from "@tanstack/react-query"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useEffect, useState } from "react"
import { useFormik } from "formik"
import axios from "axios"

import { CountryProps, CourseProps, HttpErrorProps, StateProps } from "types"
import { Button, Input, Loader, Spinner } from "components"
import { usePageTitle } from "hooks"
import styles from "utils/styles"
import {
	EducationLevel,
	EmploymentStatus,
	LearningTracks,
	socialLinks,
} from "constants/index"

const initialValues = {
	firstName: "",
	lastName: "",
	email: "",
	phone: "",
	password: "",
	gender: "male",
	dateOfBirth: "",
	educationLevel: "junior",
	employmentStatus: "employed",
	country: "",
	state: "",
	track: "engineering",
	course: "",
}

const Signup = () => {
	const [countries, setCountries] = useState<CountryProps[]>([])
	const [courses, setCourses] = useState<CourseProps[]>([])
	const [states, setStates] = useState<StateProps[]>([])
	usePageTitle("Sign up for your account")
	const navigate = useNavigate()

	const { data } = useQuery({
		queryFn: () =>
			axios.get("https://countriesnow.space/api/v0.1/countries/states"),
		queryKey: [""],
	})

	const { isPending, mutateAsync } = useMutation({
		mutationFn: (payload: typeof initialValues) =>
			axios.post(`${import.meta.env.VITE_API_URI}/auth/signup`, payload),
		mutationKey: ["signup"],
		onSuccess: ({ data }) => {
			const { message } = data
			toast.success(message)
			navigate("/signin")
		},
		onError: (error: HttpErrorProps) => {
			const {
				response: { data },
			} = error
			toast.error(data.message)
		},
	})

	const { handleChange, handleSubmit, values } = useFormik({
		initialValues,
		onSubmit: (data) => mutateAsync(data),
	})

	useEffect(() => {
		setCountries(data?.data?.data)
	}, [data])

	useEffect(() => {
		const country = countries.find((country) => country.name === values.country)
		if (country) {
			setStates(country.states)
		}
	}, [values.country])

	useEffect(() => {
		const track = LearningTracks.find((track) => track.name === values.track)
		if (track) {
			setCourses(track.courses)
		}
	}, [values.track])

	if (!countries) return <Loader />

	return (
		<main className="grid h-screen w-full grid-cols-1 lg:grid-cols-2">
			<section className="h-full w-full bg-main/[0.6] px-5 py-10">
				<Link to="/" className="text-2xl">
					TraxoHQ
				</Link>
				<div className="flex h-full w-full flex-col justify-center gap-5">
					<div>
						<p className="text-6xl lg:text-8xl">
							Learn in-demand skills without any stress.
						</p>
						<p className="font-jost text-xl lg:text-2xl">
							Earn a Diploma in highly-sought after skills.
						</p>
					</div>
					<div className="mt-40 flex flex-col items-center lg:mt-60">
						<p className="text-sm">
							<b>TraxoHQ</b> &copy;{new Date().getFullYear()}
						</p>
						<div className="flex items-center gap-4">
							{socialLinks.map((link, index) => (
								<a
									key={index}
									{...link.url}
									className={`text-black ${styles.iconLink}`}>
									{link.icon}
								</a>
							))}
						</div>
					</div>
				</div>
			</section>
			<section className="h-full w-full bg-white px-5 py-10">
				<p className="text-2xl lg:text-4xl">Application Form</p>
				<p className="text-sm font-light lg:text-base">Fill in your details</p>
				<form
					onSubmit={handleSubmit}
					className="my-4 flex w-full flex-col items-center gap-4">
					<div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
						<Input
							type="text"
							label="First Name"
							id="firstName"
							onChange={handleChange}
						/>
						<Input
							type="text"
							label="Last Name"
							id="lastName"
							onChange={handleChange}
						/>
						<Input type="email" label="Email" id="email" onChange={handleChange} />
						<Input
							type="password"
							label="Password"
							name="password"
							onChange={handleChange}
						/>
						<Input type="tel" label="Phone" id="phone" onChange={handleChange} />
						<Input as="select" label="Gender" id="gender" onChange={handleChange}>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</Input>
						<Input
							as="select"
							label="Employment Status"
							id="employmentStatus"
							onChange={handleChange}>
							{EmploymentStatus.map((status) => (
								<option key={status} value={status}>
									{status}
								</option>
							))}
						</Input>
						<Input
							type="date"
							label="Date of birth"
							id="dateOfBirth"
							max={new Date().toISOString().split("T")[0]}
							onChange={handleChange}
						/>
						<Input
							as="select"
							label="Eduactional level"
							id="educationLevel"
							onChange={handleChange}>
							{EducationLevel.map((level) => (
								<option key={level.value} value={level.value}>
									{level.name}
								</option>
							))}
						</Input>
						<Input as="select" label="Country" id="country" onChange={handleChange}>
							{countries.map((country) => (
								<option key={country.iso2} value={country.name}>
									{country.name}
								</option>
							))}
						</Input>
						<Input as="select" label="State/City" id="state" onChange={handleChange}>
							{states?.map((state) => (
								<option key={state.state_code} value={state.name}>
									{state.name}
								</option>
							))}
						</Input>
						<Input as="select" label="Track" id="track" onChange={handleChange}>
							{LearningTracks.map((track) => (
								<option key={track.id} value={track.name}>
									{track.name}
								</option>
							))}
						</Input>
						<Input as="select" label="Course" id="course" onChange={handleChange}>
							{courses?.map((course) => (
								<option key={course.id} value={course.name}>
									{course.name}
								</option>
							))}
						</Input>
					</div>
					<Input
						as="input"
						type="checkbox"
						id="agreement"
						required
						label={
							<p className="">
								By clicking continue, I agree to{" "}
								<Link to="/" className="link text-main">
									Terms of Use
								</Link>{" "}
								and acknowledge that I have read the{" "}
								<Link to="/" className="link text-main">
									Privacy Policy
								</Link>
								.
							</p>
						}
					/>
					<Button as="button" type="submit" width="w-full lg:w-[350px]">
						{isPending ? <Spinner /> : "Proceed"}
					</Button>
				</form>
				<p className="text-center text-sm lg:text-base">
					Already have an account?{" "}
					<Link to="/signin" className="link text-main">
						Sign in
					</Link>
				</p>
			</section>
		</main>
	)
}

export default Signup
