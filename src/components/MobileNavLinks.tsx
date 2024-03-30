import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";

function MobileNavLinks() {
    return (
        <>
            <Link
                to='/user-profile'
                className={'flex bg-white items-center font-bold '}>
                <span className={'text-lg px-2'}> User Profile</span>
            </Link>
            <Button
            className={"flex items-center px-3 font-bold"}>
                Log out
            </Button>
        </>
    )
}

export default MobileNavLinks
