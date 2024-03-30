import {useAuth0} from "@auth0/auth0-react";
import {useEffect, useRef} from "react";
import {UseCreateMyUser} from "@/api/MyUserApi.tsx";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function AuthCallback() {
    const {user} = useAuth0();
    const hasUserCreated = useRef(false);
    const {createUser} = UseCreateMyUser();
    const navigate = useNavigate();
    const showToastMessage = () => {
        toast.success("Login Successful!", {
            position: "top-right",
            autoClose: 3000,
        });
    }
    const showErrorToast = () => {
        toast.error("Error creating user", {
            position: "top-right",
            autoClose: 3000,
        });
    }
    useEffect(() => {
        if (user?.email && user?.sub && !hasUserCreated.current) {
            createUser({auth0Id: user.sub, email: user.email}).then(() => {
                showToastMessage();

            }).catch((error) => {
                showErrorToast();
                throw new Error("Frontend can't create user" + error);
            });
            hasUserCreated.current = true;
            navigate('/')
        }

    }, [createUser, navigate, user]);

    return (
        <div>
            Loading...
        </div>
    )
}

export default AuthCallback
