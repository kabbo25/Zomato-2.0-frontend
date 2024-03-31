import UserProfileForm from "@/forms/user_profile_form/UserProfileForm.tsx";
import {UseGetMyUser, UseUpdateUser} from "@/api/MyUserApi.tsx";
import LoadSpinner from "@/components/LoadSpinner.tsx";

const UserProfilePage = () => {
    const {currentUser, isLoading: isGetLoading} = UseGetMyUser();
    const {updateUser, isLoading: isUpdateLoading} = UseUpdateUser();
    if (isGetLoading) {
        return <LoadSpinner/>
    }
    if (!currentUser) {
        return <div>Failed to fetch user</div>;
    }
    return (
        <>
            <UserProfileForm onSave={updateUser} isLoading={isUpdateLoading} currentUser={currentUser}/>
        </>
    )

}
export default UserProfilePage
