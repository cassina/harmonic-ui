import { CheckboxColor } from "./Checkbox.type";
import { ComponentProps } from "react";

export interface CheckboxProps extends ComponentProps<'input'> {
    checkboxColor?: CheckboxColor;
}
