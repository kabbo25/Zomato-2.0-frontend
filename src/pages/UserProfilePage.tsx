import UserProfileForm from "@/forms/user_profile_form/UserProfileForm.tsx";
import {UseGetMyUser, UseUpdateUser} from "@/api/MyUserApi.tsx";
import {RotatingLines} from "react-loader-spinner";

const UserProfilePage = () => {
    const {currentUser, isLoading: isGetLoading} = UseGetMyUser();
    const {updateUser, isLoading: isUpdateLoading} = UseUpdateUser();
    if (isGetLoading) {
        return <RotatingLines

            width="80"


            ariaLabel="loading"
        />

    }
    if (!currentUser) {
        return <div>Failed to fetch user</div>;
    }
    return (
        <UserProfileForm onSave={updateUser} isLoading={isUpdateLoading} currentUser={currentUser}/>
    )
}
export default UserProfilePage
