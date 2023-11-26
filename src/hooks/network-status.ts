import { useEffect, useState } from "react"

const useNetworkStatus = () => {
	const [online, setOnline] = useState(navigator.onLine)

	useEffect(() => {
		window.addEventListener("online", () => setOnline(true))
		window.addEventListener("offline", () => setOnline(false))
		return () => {
			window.removeEventListener("online", () => setOnline(true))
			window.removeEventListener("offline", () => setOnline(false))
		}
	}, [])

	return online
}

export default useNetworkStatus
