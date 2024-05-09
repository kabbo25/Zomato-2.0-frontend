import {useFormContext} from "react-hook-form";
import {FormControl, FormDescription, FormField, FormItem, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {AspectRatio} from "@/components/ui/aspect-ratio.tsx";

const ImageSection = () => {
    const {control,watch}=useFormContext();
    const existingImage= watch("ImageUrl");
    return (
        <div className={'space-y-2'}>
            <div>
                <h2 className={'text-2xl font-bold'}>Image</h2>
                <FormDescription>
                    Add an image that will be displayed on your restaurant listing in the search results. Adding a new image will overwrite the existing one.
                </FormDescription>
            </div>
            <div className={'flex flex-col gap-8 md:w-[50%]'}>
                {existingImage && (
                    <AspectRatio ratio={16 / 9}>
                        <img
                            src={existingImage}
                            className="rounded-md object-contain h-full w-full"
                            alt={'restaurant'}
                        />
                    </AspectRatio>
                )}
                <FormField
                    control={control}
                    name="ImageFile"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    className="bg-white"
                                    type="file"
                                    accept=".jpg, .jpeg, .png"
                                    onChange={(event) =>
                                        field.onChange(
                                            event.target.files ? event.target.files[0] : null
                                        )
                                    }
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </div>
    )
}
export default ImageSection
