import {ComponentProps} from "react";
import {CheckboxColor} from "@types";
import {ChoiceInputType, TextInputType} from "@types";
import {SVGShape} from "@types";

export interface InputBaseProps extends ComponentProps<'input'> {
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