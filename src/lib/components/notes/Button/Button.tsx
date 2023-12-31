import React from "react";
import {ButtonProps} from "@interfaces";
import {mergePriorityClasses} from "@utils/index";
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
export const Button = (
    {
       label,
       icon,
       onClick,
       className,
       disabled = false,
       type = 'button',
       buttonColor = 'primary',
       buttonStyle = 'filled',
       iconX = 'left',
       ...props
}: ButtonProps) => {
    const theme = getButtonStyle(buttonColor, buttonStyle);
    const styles = mergePriorityClasses(className, theme);
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            type={type}
            className={`${styles}`}
            {...props}>
            {iconX === 'left' && icon}
            <span>{label}</span>
            {iconX === 'right' && icon}
        </button>
    );
};


