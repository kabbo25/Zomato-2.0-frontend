import {useCreateMyRestaurant, userGetRestaurant} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";
const ManageRestaurantPage = () => {
    const {createRestaurant, isLoading} = useCreateMyRestaurant();
    const {currentRestaurant} = userGetRestaurant();
    return (
        <ManageRestaurantForm onSave={createRestaurant} isLoading={isLoading} currentRestaurant={currentRestaurant}/>
    );
};

export default ManageRestaurantPage;
