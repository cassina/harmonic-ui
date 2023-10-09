import { CheckboxColor } from "@types";
import { ComponentProps } from "react";
import {SVGShape} from "@types";

export interface CheckboxProps extends ComponentProps<'input'> {
    shape?: SVGShape;
    checkboxColor?: CheckboxColor;
}
