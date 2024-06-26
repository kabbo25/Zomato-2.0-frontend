import LoadingButton from "@/components/LoadButton.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Form} from "@/components/ui/form.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import CuisinesSection from "@/forms/manage-restaurant-form/CuisinesSection.tsx";
import DetailsSection from "@/forms/manage-restaurant-form/DetailsSection.tsx";
import MenuSection from "@/forms/manage-restaurant-form/MenuSection.tsx";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import ImageSection from "@/forms/manage-restaurant-form/ImageSection.tsx";
import {Restaurant} from "@/types.ts";
import {useEffect} from "react";

const formSchema = z
    .object({
        RestaurantName: z.string({
            required_error: "Restaurant name is required",
        }),
        City: z.string({
            required_error: "City is required",
        }),
        Country: z.string({
            required_error: "Country is required",
        }),
        DeliveryTime: z.coerce.number({
            required_error: "Estimated delivery time is required",
            invalid_type_error: "typed should be number",
        }),
        DeliveryPrice: z.coerce.number({
            required_error: "Delivery Price should be required",
            invalid_type_error: "typed should be number",
        }),
        Cuisine: z.array(z.string()).nonempty({
            message: "Cuisine should be array",
        }),
        MenuItems: z.array(
            z.object({
                Name: z.string().min(1, "name is required"),
                Price: z.coerce.number().min(1, "price is required"),
            })
        ),
        ImageUrl: z.string().optional(),
        ImageFile: z.instanceof(File, {message: "image is required"}).optional(),
    })
    .refine((data) => data.ImageUrl || data.ImageFile, {
        message: "Either image URL or image File must be provided",
        path: ["ImageFile"],
    });
type RestaurantFormData = z.infer<typeof formSchema>;
type Props = {
    onSave: (restaurantFromData: FormData) => void;
    isLoading: boolean;
    currentRestaurant?: Restaurant;
};
const ManageRestaurantForm = ({onSave, isLoading, currentRestaurant}: Props) => {
    const form = useForm<RestaurantFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Cuisine: [],
            MenuItems: [{Name: "", Price: 0}]
        }
    });
    useEffect(() => {
        if(!currentRestaurant) {
            return;
        }
        const deliveryPriceFormatted = parseInt(
            (currentRestaurant.DeliveryPrice/100).toFixed(2)
        );
        const menuItemsFormatted= currentRestaurant.MenuItems.map((item)=>({
                ...item,
                Price: parseInt((item.Price/100).toFixed(2))
            })
        );
        const updatedRestaurant= {
            ...currentRestaurant,
            DeliveryPrice: deliveryPriceFormatted,
            MenuItems: menuItemsFormatted
        };
        form.reset(updatedRestaurant);
    }, [form,currentRestaurant]);
    const onSubmit = (formDataJson: RestaurantFormData) => {
        const formData = new FormData();
        formData.append("RestaurantName", formDataJson.RestaurantName);
        formData.append("City", formDataJson.City);
        formData.append("Country", formDataJson.Country);
        formData.append(
            "DeliveryPrice",
            (formDataJson.DeliveryPrice * 100).toString()
        );
        formData.append("DeliveryTime", formDataJson.DeliveryTime.toString());
        formDataJson.Cuisine.forEach((item, index) => {
            formData.append(`Cuisine[${index}]`, item);
        });
        formDataJson.MenuItems.forEach((item, index) => {
            formData.append(`MenuItems[${index}][Name]`, item.Name);
            formData.append(
                `MenuItems[${index}][Price]`,
                (item.Price * 100).toString()
            );
        });
        if (formDataJson.ImageFile) {
            formData.append(`ImageFile`, formDataJson.ImageFile);
        }
        onSave(formData);
    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className={"bg-gray-50 space-y-4 p-10 rounded-lg"}
                >
                    <DetailsSection/>
                    <Separator/>
                    <CuisinesSection/>
                    <Separator/>
                    <MenuSection/>
                    <Separator/>
                    <ImageSection/>
                    {isLoading ? (
                        <LoadingButton/>
                    ) : (
                        <Button type={"submit"} className={"w-[10%] font-bold"}>
                            Submit
                        </Button>
                    )}
                </form>
            </Form>
        </>
    );
};
export default ManageRestaurantForm;
