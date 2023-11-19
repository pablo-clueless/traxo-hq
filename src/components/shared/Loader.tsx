import { useEffect, useState } from "react"

const Colors = [
	"var(--main)",
	"var(--accent)",
	"var(--highlight)",
	"var(--dark)",
]

const Loader = () => {
	const [current, setCurrent] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % Colors.length)
		}, 2000)
		return () => clearInterval(interval)
	}, [current])

	return (
		<div className="fixed left-0 top-0 grid h-screen w-screen place-items-center">
			<div className="flex items-center justify-center gap-4">
				{[...Array(10)].map((_, index) => {
					const delay = (index + 1) / 10
					return (
						<div
							key={index}
							style={{ animationDelay: `${delay}s`, background: Colors[current] }}
							className="animate-wave h-[150px] w-1 rounded transition-colors duration-200 lg:h-[250px] lg:w-2"></div>
					)
				})}
			</div>
		</div>
	)
}

export default Loader
