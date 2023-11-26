interface Props {
	image: string
	fallback: string
	alt?: string
}

const Avatar = (props: Props) => {
	return (
		<div className="h-10 w-10 rounded-full">
			{props.image ? (
				<img
					src={props.image}
					alt={props.alt}
					className="h-full w-full rounded-full object-cover"
				/>
			) : (
				<div className="grid h-full w-full place-items-center rounded-full">
					<p className="">
						{props.fallback.split(" ")[0].charAt(0).toUpperCase()}
						{props.fallback.split(" ")[1].charAt(0).toUpperCase()}
					</p>
				</div>
			)}
		</div>
	)
}

export default Avatar
