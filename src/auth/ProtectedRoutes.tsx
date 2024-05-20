import { useAuth0 } from "@auth0/auth0-react";
import {useEffect, useRef} from "react";
import { Navigate, Outlet } from "react-router-dom";
import LoadSpinner from "@/components/LoadSpinner.tsx";
const ProtectedRoutes =  () => {
	const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
	useEffect(() => {
		const amni = async ()=> {
			const token = await getAccessTokenSilently();
			console.log(token);
		}
		amni();
	}, []);
	const isLogin = useRef(false);
	if (isLoading) return <LoadSpinner/>
	if (isAuthenticated || isLogin.current) {
		isLogin.current = true;
		return <Outlet />;
	}
	return <Navigate to={"/"} replace />;
};
export default ProtectedRoutes;
