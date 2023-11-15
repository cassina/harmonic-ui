import {ComponentProps} from "react";

export interface CardTitleProps extends ComponentProps<'h5'> {
    cardTitle: string;
}
