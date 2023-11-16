export default {
	iconLink:
		"text-base lg:text-2xl transition-all duration-300 hover:scale-125",
	heading: "text-3xl lg:text-5xl",
	subheading: "text-lg lg:text-xl font-jost ",
	link: "",
	navLink: (isActive: boolean) =>
		`text-sm transition-all duration-300 capitalize link ${isActive ? "text-accent" : "text-dark"
		}`,
}
