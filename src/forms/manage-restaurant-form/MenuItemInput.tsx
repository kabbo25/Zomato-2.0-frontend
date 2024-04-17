import {Button} from "@/components/ui/button";
import {FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {useFormContext} from "react-hook-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBangladeshiTakaSign} from "@fortawesome/free-solid-svg-icons";

type Props = {
    index: number;
    removeMenuItem: () => void;
};

const MenuItemInput = ({index, removeMenuItem}: Props) => {
    const {control} = useFormContext();

    return (
        <div className="flex flex-row items-end gap-2">
            <FormField control={control} name={`MenuItems.Name.${index}`} render={({field}) => (
                <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormMessage/>
                    <FormControl>
                        <Input {...field} type={'text'} placeholder={'cheese pizza'}/>
                    </FormControl>
                </FormItem>
            )}/>
            <FormField control={control} name={`MenuItems.Price.${index}`} render={({field}) => (
                <FormItem>
                    <FormLabel>Price (<FontAwesomeIcon icon={faBangladeshiTakaSign} />)</FormLabel>
                    <FormMessage/>
                    <FormControl>
                        <Input {...field} type={'text'} placeholder={'8.00'}/>
                    </FormControl>
                </FormItem>
            )}/>
            <Button className={'bg-red-500 '} onClick={() => {
                removeMenuItem();
            }}>
                Remove
            </Button>
        </div>

    );
};

export default MenuItemInput;
