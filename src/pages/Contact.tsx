import { useFormik } from "formik"

import { Button, Footer, Input, Navbar } from "components"
import { usePageTitle, usescrollToTop } from "hooks"
import { contact } from "assets/images"
import styles from "utils/styles"

const initialValues = {
	name: "",
	email: "",
	phone: "",
	subject: "",
	message: "",
}

const Contact = () => {
	usePageTitle("We're to answer your questions")
	usescrollToTop()

	const { handleChange, handleSubmit } = useFormik({
		initialValues,
		onSubmit: (data) => console.log(data),
	})

	return (
		<>
			<Navbar />
			<main className="w-full px-5 py-10 lg:px-20">
				<p className={styles.heading}>Contact Us</p>
				<p className={styles.subheading}>We're here to answer your questions.</p>
				<section className="my-5 grid w-full grid-cols-1 gap-10 lg:grid-cols-2">
					<div className="h-full w-full">
						<img src={contact} alt="" className="h-full w-full object-cover" />
					</div>
					<div className="flex h-full w-full justify-start lg:justify-end">
						<form
							onSubmit={handleSubmit}
							className="flex w-full flex-col gap-4 lg:w-2/3">
							<Input label="Name" type="text" name="name" onChange={handleChange} />
							<Input label="Email" type="email" name="email" onChange={handleChange} />
							<Input label="Phone" type="tel" name="phone" onChange={handleChange} />
							<Input
								label="Subject"
								type="text"
								name="subject"
								onChange={handleChange}
							/>
							<Input
								as="textarea"
								label="Message"
								name="message"
								onChange={handleChange}
							/>
							<Button as="button" type="submit">
								Proceed
							</Button>
						</form>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default Contact
