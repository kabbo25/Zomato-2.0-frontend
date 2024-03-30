import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "@/layouts/layout.tsx";
import HomePage from "@/pages/HomePage.tsx";
import AuthCallback from "@/pages/AuthCallback.tsx";
import UserProfilePage from "@/pages/UserProfilePage.tsx";
import ProtectedRoutes from "@/auth/ProtectedRoutes.tsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout showHero={true}> <HomePage/> </Layout>}/>
            <Route element={<ProtectedRoutes/>}>
                <Route path="/user-profile" element={<Layout> <UserProfilePage/> </Layout>}/>
            </Route>
            <Route path="/auth-callback" element={<AuthCallback/>}/>
            <Route path={'*'} element={<Navigate to="/" />} /> {/* Redirect to home page if no route matches */}

        </Routes>
    )
}
export default AppRoutes
