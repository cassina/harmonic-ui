import {LabelProps} from "./Label.interface";
import {mergeClasses} from "@utils/index";

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
const Label = ({
    htmlFor,
    text,
    className,
    ...props
    }: LabelProps) => {

    return(
        <label htmlFor={htmlFor}
               className={mergeClasses(className, 'leading-6 text-xs')}
               {...props}>
            {text}
        </label>
    );
};

export default Label;