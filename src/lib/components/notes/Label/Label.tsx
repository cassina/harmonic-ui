import {LabelProps} from "./Label.interface";
import {mergeClasses} from "@utils/index";

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