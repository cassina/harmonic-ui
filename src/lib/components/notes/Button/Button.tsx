import './Button.css';
import React from "react";
import {ButtonProps} from "@components/notes/Button/Button.interface";
import {mergeClasses} from "@utils/index";


/**
 * Button Component
 *
 * A clickable element, often used to submit forms or trigger actions.
 *
 * @prop {ButtonProps}
 *
 * @example
 * ```jsx
 * <Button label="Click me" onClick={() => alert('Button clicked!')} />
 * ```
 */
const Button = ({
    type = 'button',
    label,
    buttonColor,
    buttonStyle,
    onClick,
    className,
    ...props
}: ButtonProps) => {
    const styles = mergeClasses(className, buttonColor, buttonStyle);
    return (
        <button
            onClick={onClick}
            type={type}
            className={styles}
            {...props}
        >
            {label}
        </button>
    )
};

export default Button;

