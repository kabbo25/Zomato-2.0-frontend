import {useFormContext} from "react-hook-form";
import {FormDescription, FormField, FormItem, FormMessage} from "@/components/ui/form.tsx";
import {cuisineList} from "@/config/restaurant-options-config.ts";
import CuisineCheckbox from "@/forms/manage-restaurant-form/CuisineCheckbox.tsx";

const CuisinesSection = () => {
    const {control} = useFormContext();
    return (
        <div className={'space-y-2'}>
            <div>
                <h2 className={'text-2xl font-bold'}>Cuisines</h2>
                <FormDescription>Select the cuisine your restaurant serves</FormDescription>
            </div>
            <FormField name={'Cuisine'} control={control} render={({field}) => (
                <FormItem>
                    <div className={'grid md:grid-cols-5 gap-2'}>
                        {
                            cuisineList.map((cuisineItem) => (
                                <CuisineCheckbox cuisine={cuisineItem} field={field}/>
                            ))
                        }
                    </div>
                    <FormMessage/>
                </FormItem>
            )}/>
        </div>
    )
}
export default CuisinesSection
