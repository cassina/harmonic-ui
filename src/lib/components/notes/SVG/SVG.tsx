import React from "react";

import {SVGProps} from "@interfaces";
import {shapes} from "./SVG.config";
import {getSVGStyle} from "@components/notes/SVG/SVG.style";

/**
 * SVG Component
 *
 * A versatile SVG renderer that can display various shapes like heart, skull, and tick.
 *
 * @prop {SVGProps}
 *
 * @example
 * ```jsx
 * <SVG shape="heart" />
 * ```
 */

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
            default:
                return <polyline points={shapes.tick}></polyline>;
        }
    };

    // Get Styles
    const styles = getSVGStyle();

    return (
        <svg
            className={styles}
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
