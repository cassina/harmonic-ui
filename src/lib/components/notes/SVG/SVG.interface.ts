import {SVGLineCap, SVGLineJoin, SVGShape} from "./SVG.type";

export interface SVGProps {
    fill?: string;
    stroke?: string;
    strokeWidth?: string;
    strokeLinecap?: SVGLineCap;
    strokeLinejoin?: SVGLineJoin;
    shape?: SVGShape;
}