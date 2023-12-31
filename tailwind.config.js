/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{ts,tsx}", "./index.html"],
	theme: {
		fontFamily: {
			coolvetica: ["Coolvetica", "sans-serif"],
			jost: ["Jost", "sans-serif"],
		},
		extend: {
			animation: {
				wave: "wave 1s linear infinite",
			},
			backgroundImage: {},
			boxShadow: {
				protrusion: "4px 4px 0px 0px #29292b",
				"protrusion-xs": "2px 2px 0px 0px #29292b",
				"protrusion-md": "6px 6px 0px 0px #29292b",
				"protrusion-xl": "8px 8px 0px 0px #29292b",
				"protrusion-2xl": "10px 10px 0px 0px #29292b",
			},
			colors: {
				main: "#20DA91",
				accent: "#F65FFA",
				highlight: "#F6FB61",
				light: "#f5f5f8",
				mid: "#dde0e7",
				dark: "#29292b",
			},
			keyframes: {
				wave: {
					"0%": {
						transform: "scale(0)",
					},
					"50%": {
						transform: "scale(1)",
					},
					"100%": {
						transform: "scale(0)",
					},
				},
			},
		},
	},
	plugins: [],
}
