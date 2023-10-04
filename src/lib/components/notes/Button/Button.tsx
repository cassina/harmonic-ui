import React from "react";
import {
    COMMON_CLASSES,
    PRIMARY_CLASSES,
    COMPLEMENTARY_CLASSES,
    OUTLINE_CLASSES, WARNING_CLASSES, ERROR_CLASSES
} from './Button.styles';
import {ButtonProps} from "@components/notes/Button/Button.interface";
import {ButtonColor} from "@components/notes/Button/Button.type";

export const Button = ({
    buttonColor = 'primary',
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
    const computeStyles = (filledClass: string, outlineClass: string, tonalClass: string): string => {
        switch (buttonStyle) {
            case 'filled':
                return filledClass;
            case 'outline':
                return `${OUTLINE_CLASSES} ${outlineClass}`;
            case 'tonal':
                return tonalClass;
            default:
                return '';
        }
    };

    const buttonStyles: Record<ButtonColor, string> = {
        primary: computeStyles(PRIMARY_CLASSES.filled, PRIMARY_CLASSES.outline, PRIMARY_CLASSES.tonal),
        complementary: computeStyles(COMPLEMENTARY_CLASSES.filled, COMPLEMENTARY_CLASSES.outline, COMPLEMENTARY_CLASSES.tonal),
        warning: computeStyles(WARNING_CLASSES.filled, WARNING_CLASSES.outline, WARNING_CLASSES.tonal),
        error: computeStyles(ERROR_CLASSES.filled, ERROR_CLASSES.outline, ERROR_CLASSES.tonal),
    };

    const styles = `${buttonStyles[buttonColor]} ${COMMON_CLASSES}`;

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

