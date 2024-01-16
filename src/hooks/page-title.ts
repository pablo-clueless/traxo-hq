import { useEffect } from "react"

const usePageTitle = (title: string) => {
	useEffect(() => {
		document.title = `${title} — TraxoHQ`
	}, [title])
}

export default usePageTitle
