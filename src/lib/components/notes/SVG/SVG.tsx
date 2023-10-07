import './SVG.css';

import React from "react";

import {SVGProps} from "./SVG.interface";
import {shapes} from "./SVG.config";

export const SVG = (props: SVGProps) => {
    const {
        fill = "none",
        stroke = "white",
        strokeWidth = "2",
        strokeLinecap = "round",
        strokeLinejoin = "round",
        shape = "tick",
    } = props;

    const renderShape = () => {
        switch (shape) {
            case "heart":
                return <path d={shapes.heart}/>;
            case "skull":
                return <path d={shapes.skull}/>;
            case "tick":
            default:
                return <polyline points={shapes.tick}></polyline>;
        }
    };

    return (
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
            {renderShape()}
        </svg>
    );
};

export default SVG;