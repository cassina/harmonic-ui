import {ComponentProps} from "react";
import {CheckboxColor} from "@components/notes/Checkbox/Checkbox.type";
import {ChoiceInputType, TextInputType} from "@components/chords/Input/Input.type";
import {SVGShape} from "@components/notes/SVG/SVG.type";

export interface InputBaseProps extends ComponentProps<'input'>{
    id: string;
    label?: string;
}

export interface ChoiceInputProps extends InputBaseProps {
    type?: ChoiceInputType;
    shape?: SVGShape;
    checkboxColor?: CheckboxColor;
}

export interface TextInputProps extends InputBaseProps {
    type?: TextInputType;
}