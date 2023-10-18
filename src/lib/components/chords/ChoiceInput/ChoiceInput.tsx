import {Checkbox} from "@components/notes/Checkbox/Checkbox";
import {Label} from "@components/notes/Label/Label";
import {ChoiceInputProps} from "@interfaces";

/**
 * ChoiceInput Component
 *
 * Renders an input element. By default, it's a checkbox with an associated label.
 *
 * @prop {ChoiceInputProps}
 *
 * @example
 * ```jsx
 * <ChoiceInput id="test" label="Test Label" />
 * ```
 */
export const ChoiceInput = ({
    id,
    label,
    type = 'checkbox',
    shape = 'tick',
    checkboxColor,
    checked,
    onChange,
    ...props
}: ChoiceInputProps) => {
    return (
        <>
            { type == 'checkbox' ? (
                <div className={'flex gap-1'}>
                    <Checkbox id={id}
                              name={id}
                              checkboxColor={checkboxColor}
                              shape={shape}
                              checked={checked}
                              onChange={onChange}
                              {...props}
                    />
                    {label && (
                        <Label htmlFor={id} text={label} />
                    )}
                </div>
            ): (
                <div className={'flex gap-2 my-5'}>
                    <input type={type}/>
                </div>
            )}
        </>
    );
};