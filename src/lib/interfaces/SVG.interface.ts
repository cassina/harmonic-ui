import {SVGLineCap, SVGLineJoin, SVGShape} from "@types";

export interface SVGProps {
    fill?: string;
    stroke?: string;
    strokeWidth?: string;
    strokeLinecap?: SVGLineCap;
    strokeLinejoin?: SVGLineJoin;
    shape?: SVGShape;
}