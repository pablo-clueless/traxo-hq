const Loader = () => {
	return (
		<div className="fixed left-0 top-0 grid h-screen w-screen place-items-center">
			<div className="flex items-center justify-center gap-4">
				{[...Array(10)].map((_, index) => {
					const delay = (index + 1) / 10
					return (
						<div
							key={index}
							style={{ animationDelay: `${delay}s` }}
							className="h-[150px] w-1 animate-wave rounded bg-main transition-colors duration-200 lg:h-[250px] lg:w-2"></div>
					)
				})}
			</div>
		</div>
	)
}

export default Loader
