import {ComponentProps} from "react";

export interface CardProps extends ComponentProps<'div'> {
    imageUrl?: string;
    imageAlt?: string;
}
