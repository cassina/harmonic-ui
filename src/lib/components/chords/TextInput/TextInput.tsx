import {Label} from "@components/notes/Label/Label";
import {TextInputProps} from "@interfaces";
import {mergeClasses} from "@utils/index";
import {getTextInputStyle} from "@components/chords/TextInput/TextInput.style";
import {ReactElement} from "react";

/**
 * TextInput Component
 *
 * Renders a text input field with an associated label. By default, it renders a single-line text input.
 *
 * @prop {TextInputProps}
 *
 * @example
 * ```jsx
 * <TextInput id="sample-id" label="Sample Label" value="Sample Value" onChange={handleOnChange} />
 * ```
 */
export const TextInput = ({
    type = 'text',
    id,
    label,
    value,
    onChange,
    className,
    ...props
}: TextInputProps): ReactElement => {
    return (
        <>
            {label && (
                <Label htmlFor={id}
                       text={label}/>
            )}
            <input className={mergeClasses(className, getTextInputStyle())}
                   type={type}
                   name={id}
                   id={id}
                   value={value}
                   onChange={onChange}
                   {...props} />
        </>
    );
};
