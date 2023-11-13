import {ComponentProps} from "react";

export interface IconProps {
    ariaLabel: string;
    pathData: string;
    className?: string;
    viewBox?: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: string;
    strokeLinecap?: "butt" | "round" | "square";
    strokeLinejoin?: "miter" | "round" | "bevel";
}
