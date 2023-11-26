/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
	readonly VITE_API_URI: string
	readonly VITE_ENV: "development" | "production"
	readonly VITE_ONESIGNAL_ID: string
	readonly VITE_GTM_ID: string
	readonly VITE_GOOGLE_API_KEY: string
	readonly VITE_GOOGLE_CLIENT_ID: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
