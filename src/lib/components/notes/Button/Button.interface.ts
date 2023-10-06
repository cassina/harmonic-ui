import {ButtonColor, ButtonStyle} from "@components/notes/Button/Button.type";
import {ComponentProps} from "react";

export interface ButtonProps extends ComponentProps<'button'> {
    label: string;
    buttonColor?: ButtonColor;
    buttonStyle?: ButtonStyle;
    className?: string;
}