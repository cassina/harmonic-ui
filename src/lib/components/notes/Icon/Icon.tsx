import React from 'react';
import {IconProps} from "@interfaces";

export const Icon = (
    {
        pathData,
        ariaLabel,
        className = '',
        viewBox = '0 0 24 24',
        fill = 'none',
        stroke = 'currentColor',
        strokeWidth = '1',
        strokeLinecap = 'round',
        strokeLinejoin = 'round'
   }: IconProps) => {
    return (
        <svg
            aria-label={ariaLabel}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap={strokeLinecap}
            strokeLinejoin={strokeLinejoin}
        >
            <path d={pathData} />
        </svg>
    );
};
