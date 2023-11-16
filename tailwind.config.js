/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{ts,tsx}", "./index.html"],
	theme: {
		fontFamily: {
			jost: ["Jost", "sans-serif"],
		},
		extend: {
			boxShadow: {
				protrusion: "4px 4px 0px 0px #29292b",
			},
			colors: {
				main: "#20DA91",
				accent: "#F65FFA",
				highlight: "#F6FB61",
				light: "#f5f5f8",
				mid: "#dde0e7",
				dark: "#29292b",
			},
		},
	},
	plugins: [],
}
