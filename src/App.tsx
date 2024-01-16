import { ErrorBoundary } from "react-error-boundary"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import OneSignal from "react-onesignal"
import { useEffect } from "react"

import { ErrorFallback } from "components"
import Router from "router"

const App = () => {
	useEffect(() => {
		OneSignal.init({
			appId: String(import.meta.env.VITE_ONESIGNAL_ID),
			notifyButton: {
				enable: true,
			},
		})
	}, [])

	return (
		<ErrorBoundary
			FallbackComponent={ErrorFallback}
			onReset={() => typeof window !== undefined && window.location.reload()}>
			<ToastContainer />
			<Router />
		</ErrorBoundary>
	)
}

export default App
