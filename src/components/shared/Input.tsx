import { InputProps } from "types"

const Input = (props: InputProps) => {
	if (props.as === "select") {
		return (
			<div className="flex flex-col">
				<label className="text-sm" htmlFor={props.id}>
					{props.label}
				</label>
				<select
					className={`${
						props.width ? props.width : "w-full"
					} h-full rounded-lg border border-dark bg-white px-2 py-3 capitalize text-dark shadow-protrusion`}
					{...props}>
					{props.children}
				</select>
				{props.error && (
					<p className="font-jost text-[10px] text-red-500">{props.error}</p>
				)}
			</div>
		)
	}

	if (props.as === "textarea") {
		return (
			<div className="flex flex-col">
				<label className="text-sm" htmlFor={props.id}>
					{props.label}
				</label>
				<textarea
					className={`${
						props.width ? props.width : "w-full"
					} h-full min-h-[150px] resize-none rounded-lg border border-dark bg-white px-2 text-dark shadow-protrusion`}
					{...props}></textarea>
				{props.error && (
					<p className="font-jost text-[10px] text-red-500">{props.error}</p>
				)}
			</div>
		)
	}

	if (props.as === "input" && props.type === "checkbox") {
		return (
			<label htmlFor={props.id} className="flex items-start gap-1 text-sm">
				<input
					type="checkbox"
					className="peer sr-only rounded accent-dark"
					{...props}
				/>
				<div className="relative h-4 w-4 cursor-pointer rounded border-2 border-dark shadow-protrusion-xs transition-opacity after:absolute after:left-1/2 after:top-1/2 after:h-2 after:w-2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-sm after:bg-dark after:opacity-0 peer-checked:after:opacity-100 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2" />
				<span className="w-fit break-words">{props.label}</span>
			</label>
		)
	}

	return (
		<div className="flex flex-col">
			<label className="text-sm" htmlFor={props.id}>
				{props.label}
			</label>
			<input
				className={`${
					props.width ? props.width : "w-full"
				} h-full rounded-lg border border-dark bg-white px-2 py-3 text-dark shadow-protrusion`}
				{...props}
			/>
			{props.error && (
				<p className="font-jost text-[10px] text-red-500">{props.error}</p>
			)}
		</div>
	)
}

export default Input
