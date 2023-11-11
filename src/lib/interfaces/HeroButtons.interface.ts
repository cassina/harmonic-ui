import {ComponentProps} from "react";

export interface HeroButtonsProps extends ComponentProps<'div'> {
    buttonAlignment?: 'center' | 'left'
}
