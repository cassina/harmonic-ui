import { CheckboxColor } from "./Checkbox.type";
import { ComponentProps } from "react";
import {SVGShape} from "@components/notes/SVG/SVG.type";
import {ChoiceInputType} from "@components/chords/Input/Input.type";

export interface CheckboxProps extends ComponentProps<'input'> {
    type?: ChoiceInputType;
    shape?: SVGShape;
    checkboxColor?: CheckboxColor;
}
