import {Button} from "@/components/ui/button.tsx";
import { User} from "lucide-react"
import {useAuth0} from "@auth0/auth0-react";
import "react-toastify/dist/ReactToastify.css";
import UsernameMenu from "@/components/UsernameMenu.tsx";
function MainNav() {
    const {loginWithRedirect, isAuthenticated} = useAuth0();
    return (
        <>
        <span className={'flex space-x-2 items-center'}>
            {
                isAuthenticated ? (
                        <UsernameMenu/>
                ) : (
                    <div className={'flex items-center'}>
                        <User/>
                        <Button variant={'ghost'}
                                className={'font-bold text-xl px-2 hover:bg-white hover:text-orange-500'}
                                onClick={async () => await loginWithRedirect()}>
                            Sign in
                        </Button>

                    </div>
                )
            }
        </span>
        </>
    )
}

export default MainNav
