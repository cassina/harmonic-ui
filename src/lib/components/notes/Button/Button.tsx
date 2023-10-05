import React from "react";
import {ButtonProps} from "@components/notes/Button/Button.interface";
import {
    getStylesForColor
} from './Button.styles';

/**
 * A clickable element, often used to submit forms or trigger actions
 */
const Button = ({
    label,
    buttonColor = 'primary',
    buttonStyle = 'filled',
    type = 'button',
    onClick = undefined,
    className = undefined,
    ...props
}: ButtonProps) => {
    const styles = `${getStylesForColor(buttonColor, buttonStyle)}`;

    return (
        <button
            onClick={onClick}
            type={type}
            className={`${className || ''} ${styles} `}
            {...props}
        >
            {label}
        </button>
    )
};

export default Button;

