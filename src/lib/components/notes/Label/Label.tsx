import {LabelProps} from "@interfaces";
import {mergeClasses} from "@utils/index";
import {getLabelStyle} from "@components/notes/Label/Label.style";

/**
 * Label Component
 *
 * Renders a label element for form inputs.
 *
 * @prop {LabelProps}
 *
 * @example
 * ```jsx
 * <Label htmlFor="testInput" text="Test Label" />
 * ```
 */
export const Label = ({
    htmlFor,
    text,
    className,
    ...props
    }: LabelProps) => {

    return(
        <label htmlFor={htmlFor}
               className={mergeClasses(className, getLabelStyle())}
               {...props}>
            {text}
        </label>
    );
};