import React from "react";
import {ButtonProps} from "@interfaces";
import {mergeClasses} from "@utils/index";
import {getStylesForColor} from "@components/notes/Button/Button.styles";


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
    buttonColor = 'primary',
    buttonStyle = 'filled',
    onClick,
    className,
    ...props
}: ButtonProps) => {
    // const styles = mergeClasses(className, 'button', buttonColor, buttonStyle);
    // const results = getStyles(buttonColor, buttonStyle);
    // console.log(`Are styles working: ${results}`)
    const theme = getStylesForColor(buttonColor, buttonStyle)
    const styles = mergeClasses(className, theme);
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

