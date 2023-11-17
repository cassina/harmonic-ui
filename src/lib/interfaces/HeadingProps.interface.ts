import {ComponentProps} from "react";
import {TrackingType} from "@types";

export interface HeadingProps extends ComponentProps<'h1' | 'h2' | 'h3'> {
    tracking?: TrackingType;
}
