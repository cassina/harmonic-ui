import {LabelProps} from "./Label.interface";

const Label = ({
    htmlFor,
    text,
    ...props
    }: LabelProps) => {

    return(
        <label htmlFor={htmlFor}
               {...props}>
            {text}
        </label>
    );
};

export default Label;