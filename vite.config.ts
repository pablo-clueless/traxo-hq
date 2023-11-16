import tsconfigpaths from "vite-tsconfig-paths"
import { VitePWA } from "vite-plugin-pwa"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr(),
		tsconfigpaths(),
		VitePWA({
			includeAssets: ["favicon.ico", "safari-pinned-tab.svg"],
			manifest: {
				name: "Traxo HQ",
				short_name: "Traxo HQ",
				description: "A learning plaform for aspiring developers.",
				theme_color: "#ffffff",
				icons: [{ src: "/pwa-192x192.png", sizes: "192x192", type: "image/png" }],
			},
		}),
	],
	server: {
		hmr: { overlay: false },
	},
})
