import { CheckboxColor } from "./Checkbox.type";
import { ComponentProps, ChangeEventHandler } from "react";

export interface CheckboxProps extends ComponentProps<'input'> {
    checked: boolean;
    checkboxColor?: CheckboxColor;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    className?: string;
}
