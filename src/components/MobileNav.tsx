import {Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger} from "@/components/ui/sheet.tsx";
import {CircleUserRound, Menu} from "lucide-react";
import {useAuth0} from "@auth0/auth0-react";
import {Separator} from "@/components/ui/separator.tsx";
import {Button} from "@/components/ui/button.tsx";
import MobileNavLinks from "@/components/MobileNavLinks.tsx";

const MobileNav = () => {
    const {isAuthenticated, user, loginWithRedirect} = useAuth0();
    return (
        <>
            <Sheet>
                <SheetTrigger>
                    <Menu className={'text-orange-500'}/>
                </SheetTrigger>
                <SheetContent className={'space-y-3'}>
                    <SheetTitle>
                        {
                            isAuthenticated ?
                                (
                                    <span className={'flex items-center font-bold gap-2'}>
                                <CircleUserRound className={'text-orange-500'}/>
                                        {user?.name}
                            </span>
                                ) :
                                (
                                    <span className={'px-4'}>Welcome to Zomato Food</span>
                                )
                        }
                    </SheetTitle>
                    <Separator/>
                    <SheetDescription className={'flex flex-col gap-4'}>
                        {
                            isAuthenticated ?
                                (
                                    <MobileNavLinks/>
                                ) :
                                (
                                    <Button
                                        onClick={() => loginWithRedirect}
                                        className={'flex-1 font-bold'}
                                    >
                                        Sign in
                                    </Button>
                                )
                        }
                    </SheetDescription>
                </SheetContent>
            </Sheet>
        </>
    )
}
export default MobileNav
