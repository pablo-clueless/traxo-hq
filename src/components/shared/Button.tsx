import { Link } from "react-router-dom"

import { ButtonProps } from "types"

const Button = (props: ButtonProps) => {
	if (props.as === "link") {
		return (
			<Link
				className={`${
					props.width ? props.width : "w-full"
				} relative flex h-[45px] items-center justify-center gap-1 rounded-xl border border-dark bg-highlight px-4 py-2 text-sm capitalize text-dark shadow-protrusion after:bg-dark`}
				{...props}>
				{props.children}
			</Link>
		)
	}

	return (
		<button
			className={`${
				props.width ? props.width : "w-full"
			} relative flex h-[45px] items-center justify-center gap-1 rounded-xl border border-dark bg-highlight px-4 py-2 text-sm capitalize text-dark shadow-protrusion after:bg-dark`}
			{...props}>
			{props.children}
		</button>
	)
}

export default Button
