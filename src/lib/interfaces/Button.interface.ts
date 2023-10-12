import {ButtonColor, ButtonStyle} from "@types";
import {ComponentProps, ReactComponentElement} from "react";

export interface ButtonProps extends ComponentProps<'button'> {
    label: string;
    buttonColor?: ButtonColor;
    buttonStyle?: ButtonStyle;
    icon?: ReactComponentElement<'svg'>;
    iconX?: 'left' | 'right';
}