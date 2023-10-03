import {ButtonRole, ButtonStyle} from "@components/notes/Button/Button.type";
import {ComponentProps, MouseEventHandler} from "react";

export interface ButtonProps extends ComponentProps<'button'> {
    label: string;
    buttonRole?: ButtonRole;
    buttonStyle?: ButtonStyle;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}