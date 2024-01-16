export default {
	iconLink: "text-base lg:text-2xl transition-all duration-300 hover:scale-125",
	heading: "text-3xl lg:text-5xl flex items-center gap-1",
	subheading: "text-lg lg:text-xl font-jost ",
	link: "",
	navLink: (isActive: boolean, xl?: boolean) =>
		`transition-all duration-300 capitalize link ${
			isActive ? "text-main" : "text-dark"
		} ${xl ? "text-xl" : "text-sm"}`,
	label:
		"text-base lg:text-lg font-jost text-dark w-fit mb-4 relative before:absolute before:top-1/2 before:-left-4 before:w-10 before:h-10 before:rounded-full before:bg-main before:!-z-[1] before:-translate-y-1/2",
	button:
		"text-sm lg:text-base rounded-2xl w-fit px-5 py-2 flex items-center gap-2 my-2 relative hover:gap-4 transition-all duration-300 before:absolute before:top-0 before:left-0 before:w-10 before:h-10 before:rounded-full before:bg-accent before:!-z-[1] hover:before:w-full hover:before:h-full hover:before:bg-main before:transition-all before:duration-300",
	networkStatus: (online: boolean) =>
		`text-xs lg:text-lg rounded-3xl px-5 lg:px-7 py-1 relative after:absolute after:top-1/2 after:right-2 after:-translate-y-1/2 after:w-2 after:h-2 after:rounded-full after:animate-pulse ${
			online
				? "bg-green-100 text-green-500 after:bg-green-500"
				: "bg-red-100 text-red-500 after:bg-red-500"
		} after:!z-[1] after:transition-all after:duration-300`,
}
