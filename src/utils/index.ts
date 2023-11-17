export const capitalize = (str: string | undefined) => {
	if (str) {
		return str.charAt(0).toUpperCase() + str.slice(1)
	}
}

capitalize.Words = (str: string | undefined) => {
	if (str) {
		const words = str.split(" ")
		const capitalizeWords = words.map(
			(word) => word.charAt(0).toUpperCase() + word.slice(1)
		)
		return capitalizeWords.join(" ")
	}
}
