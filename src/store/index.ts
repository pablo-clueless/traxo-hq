import { proxy } from "valtio"

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
	},
	logout: () => {
		state.user = null
		state.loggedIn = false
	},
	user: null,
})

export default state
