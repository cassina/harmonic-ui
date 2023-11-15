import React from "react";

import {CheckboxShapeProps} from "@interfaces";
import {getSVGStyle} from "@components/notes/CheckboxShape/CheckboxShape.style";
import {SVGPaths} from "@config/svg-paths";

/**
 * SVG Component
 *
 * A versatile SVG renderer that can display various shapes like heart, skull, and tick.
 *
 * @prop {CheckboxShapeProps}
 *
 * @example
 * ```jsx
 * <SVG shape="heart" />
 * ```
 */

export const CheckboxShape = (props: CheckboxShapeProps) => {
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
                return <path d={SVGPaths.heart}/>;
            case "skull":
                return <path d={SVGPaths.skull}/>;
            default:
                return <polyline points={SVGPaths.tick}></polyline>;
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
