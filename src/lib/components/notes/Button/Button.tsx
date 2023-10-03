import React from "react";
import {
    COMMON_CLASSES,
    PRIMARY_CLASSES,
    SECONDARY_CLASSES,
    TERTIARY_CLASSES,
    OUTLINE_CLASSES, WARNING_CLASSES, ERROR_CLASSES
} from './Button.styles';
import {ButtonProps} from "@components/notes/Button/Button.interface";
import {ButtonRole} from "@components/notes/Button/Button.type";

export const Button = ({
    buttonRole = 'primary',
    buttonStyle = 'filled',
    label,
    onClick = undefined,
    type = 'button',
    className = undefined
}: ButtonProps) => {

    // Compute text color based on background color
    // const bgColor = tailwindTheme.extend.colors[buttonRole][500];
    // const textColorClass = getContrastColor(bgColor) === 'white' ? 'text-white' : 'text-black';
    //
    // console.log('text color class: ', textColorClass)
    const computeStyles = (filledClass: string, outlineClass: string) => {
        return buttonStyle === 'filled' ? `${filledClass}` : `${OUTLINE_CLASSES} ${outlineClass}`;
    };

    const buttonStyles: Record<ButtonRole, string> = {
        primary: computeStyles(PRIMARY_CLASSES.filled, PRIMARY_CLASSES.outline),
        secondary: computeStyles(SECONDARY_CLASSES.filled, SECONDARY_CLASSES.outline),
        tertiary: computeStyles(TERTIARY_CLASSES.filled, TERTIARY_CLASSES.outline),
        warning: computeStyles(WARNING_CLASSES.filled, WARNING_CLASSES.outline),
        error: computeStyles(ERROR_CLASSES.filled, ERROR_CLASSES.outline),
    };

    const styles = `${buttonStyles[buttonRole]} ${COMMON_CLASSES}`;

    console.log('Class Name: ', styles)

    return (
        <button
            onClick={onClick}
            type={type}
            className={`${className || ''} ${styles}`}>
            {label}
        </button>
    )
};

export default Button;

