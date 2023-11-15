import {ComponentProps} from "react";

export interface LogoProps extends ComponentProps<'img'>{
    src: string;
    alt: string;
}
