import { useEffect, useState } from "react"

const Loader = () => {
	const [current, setCurrent] = useState(0)

	useEffect(() => {
		const timeout = setTimeout(() => {
			current === 3 ? setCurrent(0) : setCurrent((prev) => prev + 1)
		}, 1000)
		return () => clearTimeout(timeout)
	}, [current])

	return (
		<div className="fixed left-0 top-0 grid h-screen w-screen place-items-center">
			<p className="text-sm lg:text-xl">
				Loading
				{[...Array(current)].map((_, index) => (
					<span key={index}>.</span>
				))}
			</p>
		</div>
	)
}

export default Loader
