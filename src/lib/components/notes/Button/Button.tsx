import './Button.css';
import React from "react";
import {ButtonProps} from "@components/notes/Button/Button.interface";
import {mergeClasses} from "@utils/index";

/**
 * A clickable element, often used to submit forms or trigger actions
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

