import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import {Control} from "react-hook-form"
import { z } from "zod"
import { formSchema } from '@/lib/utils'
import { Input } from './ui/input'




interface CustomInputsProps {
    control :  Control<z.infer<typeof formSchema>>,
    name : string ,
    label: string,
    placeholder: string ,
    type? : string


}


const CustomInput = ({control ,name ,label ,placeholder ,type} : CustomInputsProps) => {
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
        <div className='form-item'>
            <FormItem>
                <FormLabel className="form-label">
                    {label} 
                </FormLabel>
                <div className='flex w-full flex-col '>
                    <FormControl>
                        <Input placeholder={placeholder}
                         className='input-class'
                         {...field}
                         type={type}
                         />
                    </FormControl>
                    <FormMessage  className='form-message mt-2'/>
                </div>

            </FormItem>
        </div>
    )}
/>  )
}

export default CustomInput