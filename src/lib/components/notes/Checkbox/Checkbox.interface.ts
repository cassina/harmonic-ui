import { CheckboxColor } from "./Checkbox.type";
import { ComponentProps } from "react";
import {SVGShape} from "@components/notes/SVG/SVG.type";

export interface CheckboxProps extends ComponentProps<'input'> {
    shape?: SVGShape;
    checkboxColor?: CheckboxColor;
}
