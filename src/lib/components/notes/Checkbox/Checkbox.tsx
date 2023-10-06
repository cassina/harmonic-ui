import React from 'react';
import { CheckboxProps } from './Checkbox.interface';
import {mergeClasses} from "@utils/index";

// Special thanks to https://github.com/marekrozmus/blog-styling-react-checkbox-with-tailwind
const Checkbox = ({
   checked,
   checkboxColor = 'primary',
   onChange,
   className,
   ...props
}: CheckboxProps) => {
    const styles = mergeClasses(className, checkboxColor);
    return(
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className={styles}
            {...props}
        />

   )
};

export default Checkbox;
