import { proxy, subscribe } from "valtio"

import type { UserProps } from "types"

interface State {
	user: UserProps | null
	loggedIn: boolean
	login: (payload: UserProps) => void
	logout: () => void
}

const state = proxy<State>({
	loggedIn: false,
	login: (payload) => {
		state.user = payload
		state.loggedIn = true
		localStorage.setItem("user", JSON.stringify(payload))
	},
	logout: () => {
		state.user = null
		state.loggedIn = false
		localStorage.removeItem("user")
	},
	user: null,
})

subscribe(state, () => {
	localStorage.setItem("user", JSON.stringify(state.user))
})

export default state
