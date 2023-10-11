import {ComponentProps} from "react";

export interface LabelProps extends ComponentProps<'label'>{
    text: string;
    htmlFor: string;
}