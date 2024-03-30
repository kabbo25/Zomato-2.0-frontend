import {useMutation, useQuery} from "react-query";
import {useAuth0} from "@auth0/auth0-react";
import {toast} from "react-toastify";
import {User} from "@/types.ts";
const API_BASE_URL= import.meta.env.VITE_API_BASE_URL;
console.log(API_BASE_URL);
type CreateUserRequest = {
    auth0Id: string;
    email: string;
};

type UpdateUserData = {
    name: string;
    AddressLine1: string;
    Country: string;
    City: string;
}
export const UseGetMyUser = () => {
    const {getAccessTokenSilently} = useAuth0();
    const getMyUserRequest = async (): Promise<User> => {
        const token = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }
        return response.json();
    };
    const {data:currentUser, isLoading, error} = useQuery("fetchCurrentUser", getMyUserRequest);
    if(error){
        toast.error("Failed to fetch user");
    }
    return {
        currentUser,
        isLoading,
    };
}
export const UseCreateMyUser = () => {
    const {getAccessTokenSilently} = useAuth0();
    const createMyUserRequest = async (user: CreateUserRequest) => {
        const token = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        console.log(response);
        if(!response.ok) {
            throw new Error("Failed to create user");
        }
    };
    const {mutateAsync: createUser, isLoading,isError, isSuccess} = useMutation(createMyUserRequest);

    return{
        createUser,
        isLoading,
        isError,
        isSuccess,
    };
};

export const UseUpdateUser = () => {
    const {getAccessTokenSilently} = useAuth0();
    const updateUserRequest = async (formData:UpdateUserData) => {
        const token = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        console.log(response);
        if(!response.ok) {
            throw new Error("Failed to update user");
        }
    };
    const {mutateAsync: updateUser, isLoading, isSuccess, error,reset} = useMutation(updateUserRequest);
    if(isSuccess){
        toast.success("User updated successfully");
    }
    if(error){
        toast.error("Failed to update user");
        reset();
    }
    return{
        updateUser,
        isLoading
    };
}