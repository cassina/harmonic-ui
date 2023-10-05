import React from 'react';
import { CheckboxProps } from './Checkbox.interface';
import {CHECKBOX_BASE_CLASSES, getCheckboxStyles} from './Checkbox.styles';

// Special thanks to https://github.com/marekrozmus/blog-styling-react-checkbox-with-tailwind
const Checkbox = ({
   checked,
   checkboxColor = 'primary',
   onChange,
   className,
   ...props
}: CheckboxProps) => {
    return(
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            // if HarmonyConfig.getColors? load styles : don't do anything
            className={`${className || ''} ${CHECKBOX_BASE_CLASSES} ${getCheckboxStyles(checkboxColor)}`.trim()}
            // className={'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'}
            {...props}
        />

   )
};

export default Checkbox;
