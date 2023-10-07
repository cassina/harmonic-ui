import './Checkbox.css';
import React from 'react';
import { CheckboxProps } from './Checkbox.interface';
import {mergeClasses} from "@utils/index";

// Special thanks to https://github.com/marekrozmus/blog-styling-react-checkbox-with-tailwind
const Checkbox = ({
    checkboxColor = 'primary',
    checked,
    onChange,
    className,
    ...props
}: CheckboxProps) => {
    const baseClasses = 'peer'; // The peer class can't be used with the @apply directive.
    const styles = mergeClasses(baseClasses, className, checkboxColor);
    return(
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            // className={'border-primary-500 checked:bg-primary-500 relative peer shrink-0 w-4 h-4 appearance-none mt-1 border-2 rounded-sm bg-white checked:border-0'}
            className={styles}
            {...props}
        />
   )
};

export default Checkbox;
