import React from 'react';
import { CheckboxProps } from '@interfaces';
import {mergeClasses} from "@utils/index";
import {CheckboxShape} from "@components/notes/CheckboxShape/CheckboxShape";
import {getCheckboxStyle} from "@components/notes/Checkbox/Checkbox.style";

/**
 * Checkbox Component
 *
 * Renders a customizable checkbox with an associated SVG shape.
 *
 * @prop {CheckboxProps}
 *
 * @example
 * ```jsx
 * <Checkbox checkboxColor="secondary" shape="cross" checked={true} onChange={myChangeHandler} />
 * ```
 */
export const Checkbox = ({
    checkboxColor = 'primary',
    shape = 'tick',
    checked,
    onChange,
    className,
    ...props
}: CheckboxProps) => {
    const theme = getCheckboxStyle(checkboxColor);
    const styles = mergeClasses(className, theme);

    return(
        // I have always been of opinion that consistency is the last refuge of the unimaginative. — Oscar Wilde
        <div className={'flex gap-1'}>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className={styles}
                {...props}
            />
            <CheckboxShape shape={shape}/>
        </div>
   );
};
