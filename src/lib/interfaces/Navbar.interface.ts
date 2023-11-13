import {ComponentProps} from "react";

export interface NavProps extends ComponentProps<'nav'>{
    fixed?: boolean;
    bgColor?: string;
}
