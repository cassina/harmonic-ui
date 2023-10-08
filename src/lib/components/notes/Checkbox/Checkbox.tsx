import './Checkbox.css';
import React from 'react';
import { CheckboxProps } from './Checkbox.interface';
import {mergeClasses} from "@utils/index";
import SVG from "@components/notes/SVG/SVG";

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
const Checkbox = ({
    checkboxColor = 'primary',
    shape = 'tick',
    checked,
    onChange,
    className,
    ...props
}: CheckboxProps) => {
    const baseClasses = 'peer'; // The peer class can't be used with the @apply directive.
    const styles = mergeClasses(baseClasses, className, checkboxColor);
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
            <SVG shape={shape}/>
        </div>
   )
};

export default Checkbox;
