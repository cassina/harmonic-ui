import {ButtonColor, ButtonStyle} from "@types";
import {ComponentProps} from "react";

export interface ButtonProps extends ComponentProps<'button'> {
    label: string;
    buttonColor?: ButtonColor;
    buttonStyle?: ButtonStyle;
}