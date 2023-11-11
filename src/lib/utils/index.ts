import chroma from 'chroma-js';
import {BaseStyle} from "@interfaces";
export function getContrastColor(bgColor: string) {
    const luminance = chroma(bgColor).luminance();
    return luminance > 0.5 ? 'black' : 'white';
}

// Helper function to convert BaseStyles to string format
export const convertBaseStyle = (theme: BaseStyle): string => {
    return Object.values(theme).filter(Boolean).join(' ');
};
export const mergeClasses = (...classes: (string | undefined | BaseStyle)[]): string => {
    return classes.filter(Boolean).join(' ');
};