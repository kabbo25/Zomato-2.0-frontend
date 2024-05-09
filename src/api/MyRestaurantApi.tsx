import type { Restaurant } from "@/types.ts";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log(API_BASE_URL);
export const useCreateMyRestaurant = () => {
	const { getAccessTokenSilently } = useAuth0();
	const createMyRestaurantRequest = async (
		restaurantFormData: FormData
	): Promise<Restaurant> => {
		const accessToken = await getAccessTokenSilently();
		const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
			body: restaurantFormData,
		});
		if (!response.ok) {
			throw new Error("Failed to Create Restaurant");
		}
		return response.json();
	};
	const {
		mutate: createRestaurant,
		isLoading,
		isSuccess,
		error,
	} = useMutation(createMyRestaurantRequest);
	if (isSuccess) {
		toast.success("Restaurant created Successfully");
	}
	if (error) {
		toast.error("Unable to create Restaurant");
	}
	return { createRestaurant, isLoading };
};