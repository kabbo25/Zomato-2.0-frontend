import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";

import {Input} from "@/components/ui/input.tsx";
import {useFormContext} from "react-hook-form";
import {faBangladeshiTakaSign} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const DetailsSection = () => {
    const {control} = useFormContext();
    return (
        <div className={'space-y-2'}>
            <div>
                <h1 className={'text-2xl font-bold'}>Details</h1>
            </div>
            <FormDescription>
                Enter the details about your restaurant
            </FormDescription>
            <FormField control={control} name={"RestaurantName"} render={({field}) => (
                <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input placeholder={'kabbo ghosh'} {...field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}/>
            <div className={'flex gap-4'}>
            <FormField control={control} name={"City"} render={({field}) => (
                <FormItem className={'flex-1'}>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                        <Input placeholder={'Jashore'} {...field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>

            )}/>
            <FormField control={control} name={"Country"} render={({field}) => (
                <FormItem className={'flex-1'}>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                        <Input placeholder={'Bangladesh'} {...field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}/>
            </div>
            <FormField control={control} name={"DeliveryPrice"} render={({field}) => (
                <FormItem className={'md:max-w-[25%]'}>
                    <FormLabel>Delivery price (<FontAwesomeIcon icon={faBangladeshiTakaSign} />) </FormLabel>
                    <FormControl>
                        <Input placeholder={'1.50'} className={'bg-white'} {...field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}/>
            <FormField control={control} name={"Country"} render={({field}) => (
                <FormItem className={'md:max-w-[25%]'}>
                    <FormLabel>Estimated Delivery Time (minutes)</FormLabel>
                    <FormControl>
                        <Input placeholder={'25'} className={'bg-white'} {...field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}/>
        </div>
    )
}
export default DetailsSection
