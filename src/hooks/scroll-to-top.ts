import { useEffect } from "react"

const usescrollToTop = () => {
	useEffect(() => {
		window.scrollTo({ behavior: "smooth", left: 0, top: 0 })
	}, [])
}

export default usescrollToTop
