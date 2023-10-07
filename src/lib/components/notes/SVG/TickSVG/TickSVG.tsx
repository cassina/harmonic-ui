import React from "react";
import {TickSVGProps} from "@components/notes/SVG/TickSVG/TickSVG.interface";
import '../SVG.css';
export const TickSVG = (props: TickSVGProps) => {
    const {
        fill = "none",
        stroke = "white",
        strokeWidth = "2",
        strokeLinecap = "round" ,
        strokeLinejoin = "round",
    } = props;
    return(
        <svg
            className={'peer-checked:block'}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap={strokeLinecap}
            strokeLinejoin={strokeLinejoin}
        >
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    );
};

export default TickSVG;