import { Navigate, Outlet } from "react-router-dom"
import Cookies from "universal-cookie"

const ProtectedRoutes = () => {
	const cookies = new Cookies()

	return cookies.get("user-token") ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes
