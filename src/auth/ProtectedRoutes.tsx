import { useAuth0 } from "@auth0/auth0-react";
import { useRef } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
	const { isAuthenticated, isLoading } = useAuth0();
	const isLogin = useRef(false);
	if (isLoading) return null;
	if (isAuthenticated || isLogin.current) {
		isLogin.current = true;
		return <Outlet />;
	}
	return <Navigate to={"/"} replace />;
};
export default ProtectedRoutes;
