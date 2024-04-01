import {z} from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form} from "@/components/ui/form.tsx";
import DetailsSection from "@/forms/manage-restaurant-form/DetailsSection.tsx";
const formSchema=z.object({
   RestaurantName:  z.string({
       required_error: "Restaurant name is required"
   }),
    City: z.string({
        required_error: "City is required"
    }),
    Country: z.string({
        required_error:"Country is required"
    }),
    DeliveryTime: z.coerce.number({
        required_error: "Estimated delivery time is required",
        invalid_type_error: "typed should be number"
    }),
    DeliveryPrice: z.coerce.number({
        required_error: "Delivery Price should be required",
        invalid_type_error: "typed should be number",
    }),
    Cuisine: z.array(z.string()).nonempty({
        message: "Cousine should be array"
    }),
    MenuItems: z.array(z.object({
        Name: z.string().min(1,"Menu Name is required"),
        Price: z.coerce.number().min(1,"Menu price should be valid integer")
    })),
    ImageURl: z.instanceof(File,{message: "image file is missing"})
})
type restaurantFormData=z.infer<typeof formSchema>;
type Props={
    onSave: (restaurantFromData: FormData)=>void ;
    isLoading: boolean;
};
const ManageRestaurantForm = ({onSave,isLoading}:Props) => {
    const form=useForm<restaurantFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Cuisine: [],
            MenuItems: [{
                Name: "Burger", Price: 0
            }]
        }
    })

    const onSubmit=(formDataJson: restaurantFormData)=>{

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                className={'bg-gray-50 space-y-4 p-10 rounded-lg'}>
                <DetailsSection/>
            </form>
        </Form>

    )
}
export default ManageRestaurantForm
