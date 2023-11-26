import { MouseEvent } from "react"

import { AlertProps } from "types"

const Alert = (props: AlertProps) => {
	const stopPropagation = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation()

	if (props.type === "error") {
		return (
			<div
				onClick={props.onClose}
				className="fixed left-0 top-0 !z-10 grid h-screen w-screen place-items-center bg-black/40">
				<div
					onClick={stopPropagation}
					className="w-full rounded bg-red-100 lg:w-[400px]">
					<div className="flex w-full items-center gap-2 rounded-t bg-red-500 px-4 py-2 text-lg text-white lg:text-xl">
						{props.header}
					</div>
					<div className="flex w-full flex-col items-center gap-4 rounded-b p-4 text-sm text-red-500 lg:text-lg">
						<p>{props.message}</p>
						<button
							onClick={props.onClose}
							className="h-[45px] w-[150px] rounded bg-red-500 text-white shadow-protrusion">
							Close
						</button>
					</div>
				</div>
			</div>
		)
	}

	if (props.type === "info") {
		return (
			<div
				onClick={props.onClose}
				className="fixed left-0 top-0 !z-10 grid h-screen w-screen place-items-center bg-black/40">
				<div
					onClick={stopPropagation}
					className="w-full rounded bg-blue-100 lg:w-[400px]">
					<div className="flex w-full items-center gap-2 rounded-t bg-blue-500 px-4 py-2 text-lg text-white lg:text-xl">
						{props.header}
					</div>
					<div className="flex w-full flex-col items-center gap-4 rounded-b p-4 text-sm text-blue-500 lg:text-lg">
						<p>{props.message}</p>
						<button
							onClick={props.onClose}
							className="h-[45px] w-[150px] rounded bg-blue-500 text-white shadow-protrusion">
							Close
						</button>
					</div>
				</div>
			</div>
		)
	}

	if (props.type === "success") {
		return (
			<div
				onClick={props.onClose}
				className="fixed left-0 top-0 !z-10 grid h-screen w-screen place-items-center bg-black/40">
				<div
					onClick={stopPropagation}
					className="w-full rounded bg-green-100 lg:w-[400px]">
					<div className="flex w-full items-center gap-2 rounded-t bg-green-500 px-4 py-2 text-lg text-white lg:text-xl">
						{props.header}
					</div>
					<div className="flex w-full flex-col items-center gap-4 rounded-b p-4 text-sm text-green-500 lg:text-lg">
						<p>{props.message}</p>
						<button
							onClick={props.onClose}
							className="h-[45px] w-[150px] rounded bg-green-500 text-white shadow-protrusion">
							Close
						</button>
					</div>
				</div>
			</div>
		)
	}

	if (props.type === "warning") {
		return (
			<div
				onClick={props.onClose}
				className="fixed left-0 top-0 !z-10 grid h-screen w-screen place-items-center bg-black/40">
				<div
					onClick={stopPropagation}
					className="w-full rounded bg-amber-100 lg:w-[400px]">
					<div className="flex w-full items-center gap-2 rounded-t bg-amber-500 px-4 py-2 text-lg text-white lg:text-xl">
						{props.header}
					</div>
					<div className="flex w-full flex-col items-center gap-4 rounded-b p-4 text-sm text-amber-500 lg:text-lg">
						<p>{props.message}</p>
						<button
							onClick={props.onClose}
							className="h-[45px] w-[150px] rounded bg-amber-500 text-white shadow-protrusion">
							Close
						</button>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div
			onClick={props.onClose}
			className="fixed left-0 top-0 !z-10 grid h-screen w-screen place-items-center bg-black/40">
			<div
				onClick={stopPropagation}
				className="w-full rounded bg-gray-100 lg:w-[400px]">
				<div className="flex w-full items-center gap-2 rounded-t bg-gray-500 px-4 py-2 text-lg text-white lg:text-xl">
					{props.header}
				</div>
				<div className="flex w-full flex-col items-center gap-4 rounded-b p-4 text-sm text-gray-500 lg:text-lg">
					<p>{props.message}</p>
					<button
						onClick={props.onClose}
						className="h-[45px] w-[150px] rounded bg-gray-500 text-white shadow-protrusion">
						Close
					</button>
				</div>
			</div>
		</div>
	)
}

export default Alert
