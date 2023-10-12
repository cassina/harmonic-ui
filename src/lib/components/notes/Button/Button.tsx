import React from "react";
import {ButtonProps} from "@interfaces";
import {mergeClasses} from "@utils/index";
import {getButtonStyle} from "@components/notes/Button/Button.style";


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
    label,
    icon,
    type = 'button',
    buttonColor = 'primary',
    buttonStyle = 'filled',
    iconX = 'left',
    onClick,
    className,
    ...props
}: ButtonProps) => {
    const theme = getButtonStyle(buttonColor, buttonStyle)
    const styles = mergeClasses(className, theme);
    return (
        <button
            onClick={onClick}
            type={type}
            className={`${styles}`}
            {...props}>
            {iconX === 'left' && icon}
            <span>{label}</span>
            {iconX === 'right' && icon}
        </button>
    )
};

export default Button;

