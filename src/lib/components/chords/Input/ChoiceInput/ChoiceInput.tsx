import Checkbox from "@components/notes/Checkbox/Checkbox";
import SVG from "@components/notes/SVG/SVG";
import Label from "@components/notes/Label/Label";
import {ChoiceInputProps} from "../Input.interface";

const ChoiceInput = ({
    id,
    label,
    type = 'checkbox',
    shape = 'tick',
    checkboxColor,
    checked,
    onChange
}: ChoiceInputProps) => {
    return (
        <div className="input-wrapper">
            { type == 'checkbox' ? (
                <div className={'flex gap-2 my-5'}>
                    <Checkbox id={id}
                              name={id}
                              checkboxColor={checkboxColor}
                              checked={checked}
                              onChange={onChange} />
                    <SVG shape={shape}/>
                    {label && (
                        <Label htmlFor={id} text={label} />
                    )}
                </div>
            ): (
                <div className={'flex gap-2 my-5'}>
                    <input type={type}/>
                </div>
            )}
        </div>
    );
};

export default ChoiceInput;