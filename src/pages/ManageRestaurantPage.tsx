import {useCreateMyRestaurant, userGetRestaurant, useUpdateMyRestaurant} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";
const ManageRestaurantPage = () => {
    const {createRestaurant, isLoading} = useCreateMyRestaurant();
    const {currentRestaurant} = userGetRestaurant();
    const {updateRestaurant, isLoading: isUpdateLoading} = useUpdateMyRestaurant();
    const isCreateRestaurant= !!currentRestaurant;
    return (
        <ManageRestaurantForm onSave={isCreateRestaurant? updateRestaurant : createRestaurant} isLoading={isLoading || isUpdateLoading} currentRestaurant={currentRestaurant}/>
    );
};

export default ManageRestaurantPage;
