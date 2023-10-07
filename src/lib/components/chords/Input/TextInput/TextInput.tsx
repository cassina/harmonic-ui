import Label from "@components/notes/Label/Label";
import {TextInputProps} from "../Input.interface";

const TextInput = ({
    type = 'text',
    id,
    label,
    value,
    onChange,
    ...props
}: TextInputProps) => {
    return (
        <div className="input-wrapper">
            <div className={'my-5'}>
                {label && (
                    <Label htmlFor={id}
                           text={label}
                           className={'block m-1'} />
                )}
                <input className={'border p-2 rounded-md'}
                       type={type}
                       name={id}
                       id={id}
                       value={value}
                       onChange={onChange}
                       {...props} />
            </div>
        </div>
    );
};

export default TextInput;