import {z} from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import LoadingButton from "@/components/LoadButton.tsx";
import CustomLoginPage from "@/components/CustomLoginPage.tsx";
import {User} from "@/types.ts";
import {useEffect} from "react";


const formSchema = z.object({
    email: z.string().optional(),
    name: z.string().min(1, "name is required"),
    AddressLine1: z.string().min(1, "name is required"),
    City: z.string().min(1, "City is required"),
    Country: z.string().min(1, "Country is required"),
});

type UserFormData = z.infer<typeof formSchema>

type Props = {
    onSave: (userProfileData: UserFormData) => void;
    isLoading: boolean;
    currentUser: User;
}


const UserProfileForm = ({onSave, isLoading, currentUser}: Props) => {
    const form = useForm<UserFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: currentUser
    })
    useEffect(() => {
        form.reset(currentUser);
    },[currentUser,form])
    return (
        <div className={'grid md:grid-cols-2'}>
            <CustomLoginPage/>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSave)}
                    className={'space-y-4 bg-gray-50 rounded-lg p-10'}
                >
                    <div>
                        <h2 className={'text-2xl font-bold'}>User Profile Data</h2>
                        <FormDescription>
                            View and change your profile information here
                        </FormDescription>
                    </div>
                    <FormField control={form.control} name={'email'} render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} type={'email'} placeholder={'Email'} disabled={true}/>
                            </FormControl>
                        </FormItem>
                    )}/>
                    <FormField control={form.control} name={'name'} render={({field}) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field} type={'text'} placeholder={'Name'}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}/>
                    <div className={'flex flex-col  md:flex-row gap-4'}>

                        <FormField control={form.control} name={'AddressLine1'} render={({field}) => (
                            <FormItem className={'flex-1'}>
                                <FormLabel>Address Line 1</FormLabel>
                                <FormControl>
                                    <Input {...field} type={'text'} placeholder={'Address Line 1'}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}/>
                        <FormField control={form.control} name={'City'} render={({field}) => (
                            <FormItem className={'flex-1'}>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                    <Input {...field} type={'text'} placeholder={'City'}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}/>
                        <FormField control={form.control} name={'Country'} render={({field}) => (
                            <FormItem className={'flex-1'}>
                                <FormLabel className={'flex-1'}>Country</FormLabel>
                                <FormControl>
                                    <Input {...field} type={'text'} placeholder={'Country'}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}/>
                    </div>
                    {
                        isLoading ?
                            (
                                <LoadingButton/>
                            ) :
                            (
                                <Button type={'submit'} className={'bg-orange-500 text-white font-bold'}>
                                    Submit
                                </Button>
                            )
                    }
                </form>

            </Form>
        </div>
    )
}
export default UserProfileForm


